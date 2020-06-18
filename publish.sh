echo "Locking deploy to ${temp##*|}..."
curl -X POST -H "Authorization: Bearer $NETLIFY_PUBLISH_KEY" -d "{}" "https://api.netlify.com/api/v1/deploys/${temp##*|}/lock"