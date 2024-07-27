#!/bin/sh

# รัน migration
npm run migrate

# รัน seed script
npm run seed

# รันแอปพลิเคชัน
exec "$@"
