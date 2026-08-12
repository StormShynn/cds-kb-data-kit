---
name: I_MAINTORDCHANGEDOCUMENTDEX
description: "Maintordchangedocumentdex"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - data-extraction
  - document
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDCHANGEDOCUMENTDEX

**Maintordchangedocumentdex**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `DatabaseTable` | ✓ | |  |  |  |  |
| `ChangeDocTableKey` | ✓ | |  |  |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |  |  |
| `MaintenanceOrder` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenanceOrderType` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |  |  |
| `ChangeDocPreviousUnit` |  | |  | `cast ( ChangeDocumentItem.ChangeDocPreviousUnit as mmiv_chng_doc_old_unit preserving type )` |  |  |
| `ChangeDocNewUnit` |  | |  | `cast ( ChangeDocumentItem.ChangeDocNewUnit as mmiv_chng_doc_new_unit preserving type )` |  |  |
| `ChangeDocPreviousCurrency` |  | |  | `cast ( ChangeDocumentItem.ChangeDocPreviousCurrency as mmiv_chng_doc_old_currency preserving type )` |  |  |
| `ChangeDocNewCurrency` |  | |  | `cast ( ChangeDocumentItem.ChangeDocNewCurrency as mmiv_chng_doc_new_currency preserving type )` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@EndUserText.label: 'Maintenance Order Change Document'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ] 
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'MaintenanceOrder'
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'cdpos', role: #MAIN,
                    viewElement: ['ChangeDocObject', 'ChangeDocObjectClass', 'ChangeDocument', 'DatabaseTable', 'ChangeDocTableKey', 'ChangeDocDatabaseTableField', 'ChangeDocItemChangeType'],
                    tableElement: ['objectid', 'objectclas', 'changenr', 'tabname', 'tabkey', 'fname', 'chngind' ]
                },
                {
                    table: 'aufk', role:  #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['MaintenanceOrder'],
                    tableElement: ['AUFNR']
                 },
                 {
                    table: 'cdhdr', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ChangeDocObjectClass', 'ChangeDocObject', 'ChangeDocument'],
                    tableElement: ['objectclas', 'objectid', 'changenr']
                 }
            ]
        }
    }
 }
define view entity I_MaintOrdChangeDocumentDEX
  as select from I_ChangeDocumentItem as ChangeDocumentItem
    inner join   I_MaintenanceOrder   as MaintOrder on MaintOrder.MaintenanceOrder = substring(
      ChangeDocumentItem.ChangeDocObject, 6, 12
    )

{
  key ChangeDocumentItem.ChangeDocObject,
  key ChangeDocumentItem.ChangeDocObjectClass,
  key ChangeDocumentItem.ChangeDocument,
  key ChangeDocumentItem.DatabaseTable,
  key ChangeDocumentItem.ChangeDocTableKey,
  key ChangeDocumentItem.ChangeDocDatabaseTableField,
  key ChangeDocumentItem.ChangeDocItemChangeType,

      MaintOrder.MaintenanceOrder,
      @Consumption.hidden: true
      MaintOrder.MaintenancePlanningPlant,   
      @Consumption.hidden: true  
      MaintOrder.MaintenanceOrderType,
      @Consumption.hidden: true
      MaintOrder.MaintenancePlannerGroup,


      ChangeDocumentItem.ChangeDocNewFieldValue,
      ChangeDocumentItem.ChangeDocPreviousFieldValue,

      cast ( ChangeDocumentItem.ChangeDocPreviousUnit as mmiv_chng_doc_old_unit preserving type )         as ChangeDocPreviousUnit,

      cast ( ChangeDocumentItem.ChangeDocNewUnit as mmiv_chng_doc_new_unit preserving type )              as ChangeDocNewUnit,

      cast ( ChangeDocumentItem.ChangeDocPreviousCurrency as mmiv_chng_doc_old_currency preserving type ) as ChangeDocPreviousCurrency,

      cast ( ChangeDocumentItem.ChangeDocNewCurrency as mmiv_chng_doc_new_currency preserving type )      as ChangeDocNewCurrency,

      ChangeDocumentItem._ChangeDocument.CreatedByUser,
      ChangeDocumentItem._ChangeDocument.CreationDate,
      ChangeDocumentItem._ChangeDocument.CreationTime

}
where

  ChangeDocumentItem.ChangeDocObjectClass = 'ORDER'
```
