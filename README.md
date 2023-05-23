# Backend prisma

La API de Prisma ofrece una variedad de endpoints que te permiten interactuar con diferentes funcionalidades y datos del sistema.

## Tabla de contenidos
- [Auth](#auth)
- [User routes](#user-routes)
- [Companies routes](#companies-routes)
- [Positions routes](#positions-routes)
- [Tags routes](#tags-routes)
- [Terms routes](#terms-routes)
- [Modes routes](#modes-routes)
- [Schedule routes](#schedule-routes)
- [Quotes routes](#quotes-routes)
- [Customers routes](#customers-routes)
- [Workers routes](#workers-routes)
- [Plans routes](#plans-routes)
- [Stalls routes](#stalls-routes)
- [NoveltyTables routes](#noveltytables-routes)
- [SubstituteTables routes](#substitutetables-routes)
- [WebSocket](#websocket)

## Requisitos

requisitos necesarios para ejecutar el proyecto:

- Versión de Go 1.19.5

## Instalación

Una vez hayas clonado el repositorio, simplemente ejecuta el siguiente comando:

```bash
go run main.go

```

# Endpoints

## Auth
- POST /signup 
data:

```json
{
  "email": "",
  "password": "",
  "name": "",
  "company": "",
  "location": "",
  "roles": [],
  "image": "",
  "desertref": ""
}
```
- POST /login
data:

```json
{
  "email": "",
  "password": "",
}
```

## User routes
- GET /profile
- GET /users/list/{companyId}
- PATCH /users/update/{id}
data:

```json
{
  "name": "",
  "email": "",
  "company": "",
  "location": "",
  "roles": [],
  "active": false,
  "image": "",
  "desertref": ""
}
```
- PATCH /users/update/roles/{id}
data:

```json
{
  "_id": "",
  "roles": []
}
```
- DELETE /users/delete/{id}

## Companies routes
- POST /companies
data:

```json
{
  "name": "",
  "db": "",
  "email": "",
  "website": "",
  "city": "",
  "nit": "",
  "desertref": "",
  "logo": "",
  "logoPdf": "",
  "desertrefPdf": "",
  "primaryColor": "",
  "secondaryColor": ""
}
```
- GET /companies/findone/{id}
- GET /companies/list
- GET /companies/CompanyData/location/{location}
- PATCH /companies/update/{id}
data:

```json
{
  "name": "",
  "email": "",
  "website": "",
  "addsInStall": false,
  "city": "",
  "nit": "",
  "desertref": "",
  "logo": "",
  "logoPdf": "",
  "desertrefPdf": "",
  "primaryColor": "",
  "secondaryColor": "",
  "active": false
}
```
- DELETE /companies/delete/{id}

## Companies/Locations routes
- PATCH /companies/addLocation/{id}
data:

```json
{
  "name": "",
  "email": "",
  "city": ""
}
```
- PATCH /companies/updateLocation/{id}/location/{location}
data:

```json
{
  "name": "",
  "email": "",
  "city": ""
}
```
- PATCH /companies/removeLocation/{id}/location/{location}

## Companies/CustomerFields routes
- PATCH /companies/addCustomerField/{id}
data:

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/updateCustomerField/{id}/field/{field}
data:

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/removeCustomerField/{id}/field/{field}

## Companies/WorkerFields routes
- PATCH /companies/addWorkerField/{id}
data:

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/updateWorkerField/{id}/field/{field}
data:

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/removeWorkerField/{id}/field/{field}

## Companies/AditionalCost routes
- POST /aditionalCosts
data:

```json
{
  "location": "",
  "year": "",
  "value": 0.0
}
```
- GET /aditionalCosts/list
- GET /aditionalCosts/locList/{year}
- GET /aditionalCosts/comList/{company}
- PATCH /aditionalCosts/update/{id}
data:

```json
{
  "year": "",
  "value": 0.0
}
```
- DELETE /aditionalCosts/delete/{id}

## Positions routes
- POST /positions
data:

```json
{
  "location": "",
  "name": "",
  "description": ""
}
```
- GET /positions/list
- GET /positions/locList
- GET /positions/comList/{company}
- PATCH /positions/update/{id}
```json
{
  "name": "",
  "description": "",
  "active": false
}
```
- DELETE /positions/delete/{id}

## Tags routes
- POST /tags
- GET /tags/list
- GET /tags/locList
- GET /tags/comList/{company}
- PATCH /tags/update/{id}
- DELETE /tags/delete/{id}

## Terms routes
- POST /terms
- GET /terms/list
- GET /terms/locList
- GET /terms/comList/{company}
- PATCH /terms/update/{id}
- DELETE /terms/delete/{id}
- PATCH /terms/addSuggest

## Modes routes
- POST /modes
- GET /modes/list
- GET /modes/locList
- GET /modes/comList/{company}
- PATCH /modes/update/{id}
- DELETE /modes/delete/{id}

## Schedule routes
- POST /schedules
- GET /schedules/list
- GET /schedules/locList
- GET /schedules/comList/{company}
- PATCH /schedules/update/{id}
- DELETE /schedules/delete/{id}

## Quotes routes
- POST /quotes
- GET /quotes/findByDates/{date}

## Customers routes
- POST /customers
- GET /customers/findone/{id}
- GET /customers/list/{name}/{limit}/{skip}
- GET /customers/all
- PATCH /customers/update/{id}
- DELETE /customers/delete/{id}
- PATCH /customers/ActiveCustomer
- GET /customers/amount

## Workers routes
- POST /workers
- GET /workers/findone/{id}
- GET /workers/findByIdentification/{identification}
- GET /workers/list/{name}/{limit}/{skip}
- GET /workers/all
- POST /workers/array
- PATCH /workers/ActiveWorkers
- GET /workers/amount
- GET /workers/stats/{startDate}/{endDate}
- GET /workers/tracking/{startDate}/{endDate}
- GET /workers/tracking/list/{name}/{limit}/{skip}/{startDate}/{endDate}
- POST /workers/notInArray
- PATCH /workers/update/{id}
- DELETE /workers/delete/{id}
- GET /workers/legacy

# Plans routes

- POST /plans
- GET /plans/getAll/{location}/{startDate}/{endDate}
- GET /plans/actives/{customer}
- GET /plans/getActives/{customer}
- GET /plans/findByDates/{customer}/{startDate}/{endDate}
- PATCH /plans/update/{id}
- DELETE /plans/delete/{id}

# Plans/Places routes

- PATCH /plans/addPlace/{id}
- PATCH /plans/updatePlace/{id}/place/{place}
- PATCH /plans/removePlace/{id}/place/{place}

# Suggest Plan routes

- POST /plans/suggest/{id}

# Stalls routes

- POST /stalls
- PATCH /stalls/update/{id}
- PATCH /stalls/addworker/{id}
- PATCH /stalls/removeworker/{id}/worker/{worker}
- PATCH /stalls/fastUpdate/{id}
- PATCH /stalls/updateStatus/{id}
- PATCH /stalls/updateStatuses/{id}
- PATCH /stall/updateMultipleStatuses/{id}
- DELETE /stalls/delete/{id}
- GET /stalls/legacy

# NoveltyTables routes

- PATCH /noveltyTables/addNovelty/{id}
- PATCH /noveltyTables/addMultipleNovelties/{id}
- PATCH /noveltyTables/AddAppendNovelty/{noveltyTableId}/{noveltyId}
- POST /noveltyTable/ActiveNovelties/{id}
- PATCH /noveltyTable/ActiveAppend/{noveltyTableId}/{noveltyId}
- PATCH /noveltyTables/removeNovelty/{id}/novelty/{novelty}
- DELETE /noveltyTables/delete/{id}

# SubstituteTables routes

- PATCH /substituteTables/addSubstitutes/{id}
- PATCH /substituteTables/removeSubstitute/{id}/substitute/{substitute}
- DELETE /substituteTables/delete/{id}
- PATCH /substituteTables/addMultipleSubstitutes/{id}
- PATCH /substituteTables/AddAppendSubstitute/{substituteTableId}/{substituteId}
- POST /substituteTables/ActiveSubstitutes/{id}
- PATCH /substituteTables/ActiveAppend/{substituteTableId}/{substituteId}

# WebSocket

- /ws/{Authorization}
