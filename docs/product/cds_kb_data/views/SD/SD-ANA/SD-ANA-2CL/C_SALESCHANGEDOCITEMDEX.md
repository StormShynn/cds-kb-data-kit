---
name: C_SALESCHANGEDOCITEMDEX
description: "Saleschangedocitemdex"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - consumption-view
  - data-extraction
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# C_SALESCHANGEDOCITEMDEX

**Saleschangedocitemdex**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
| `ChangeDocGlobalFieldName` |  | |  | `case when ( DatabaseTable = 'VBAK' or DatabaseTable = 'VBAP' or DatabaseTable = 'VBEP' or DatabaseTable = 'VBPA' or DatabaseTable = 'VBKD' ) and ChangeDocDatabaseTableField = 'KEY' then cast('SalesDocument'as fieldname ) when ( DatabaseTable = 'VBAK' ) then FieldmapSDH.GFNName when ( DatabaseTable = 'VBAP' ) then FieldmapSDI.GFNName when ( DatabaseTable = 'VBKD' ) then FieldmapSDB.GFNName when ( DatabaseTable = 'VBPA' ) then FieldmapSDP.GFNName when ( DatabaseTable = 'VBEP' ) then FieldmapSDS.GFNName when ( DatabaseTable = 'FPLA') and ChangeDocDatabaseTableField = 'KEY' then cast('BillingPlan' as fieldname ) when ( DatabaseTable = 'KONVC') and ChangeDocDatabaseTableField = 'KEY' then cast('SalesDocumentCondition' as fieldname ) when ( DatabaseTable = 'KONVC' ) then FieldmapPRC.GFNName else ChangeDocDatabaseTableField end` |  |  |
| `SalesDocument` |  | |  | `ChangeDocObject` |  |  |
| `SalesDocumentItem` |  | |  | `case when DatabaseTable = 'VBAP' or DatabaseTable = 'VBPA' or DatabaseTable = 'VBEP' or DatabaseTable = 'VBKD' then substring(ChangeDocTableKey, 14, 6) else '000000' end` |  |  |
| `ScheduleLine` |  | |  | `case when DatabaseTable = 'VBEP' then substring(ChangeDocTableKey, 20, 4) else '0000' end` |  |  |
| `PartnerFunction` |  | |  | `case when DatabaseTable = 'VBPA' then substring(ChangeDocTableKey, 20, 4) else '0000' end` |  |  |
| `SalesDocumentCondition` |  | |  | `case when DatabaseTable = 'KONVC' then SDI.SalesDocumentCondition else '0000000000' end` |  |  |
| `ChangeDocPreviousUnit` |  | |  |  |  |  |
| `ChangeDocNewUnit` |  | |  |  |  |  |
| `ChangeDocPreviousCurrency` |  | |  |  |  |  |
| `ChangeDocNewCurrency` |  | |  |  |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |  |  |
| `ChangeDocTextIsChanged` |  | |  |  |  |  |
| `CreationDate` |  | | `_ChangeDocument` | `CreationDate` |  |  |
| `CreationTime` |  | | `_ChangeDocument` | `CreationTime` |  |  |
| `_ChangeDocument` | | ✓ | | | | |
| `_ChangeDocLongTableKey` | | ✓ | | | | |
| `_ChangeDocumentItemExtension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeDocument` | `I_ChangeDocument` | [0..1] |
| `_ChangeDocLongTableKey` | `I_ChangeDocLongTableKey` | [0..1] |
| `_ChangeDocumentItemExtension` | `I_ChangeDocumentItemExtension` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'CSDSLSCDITEM'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Data Extraction for Change Document Item'
@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    modelingPattern: #NONE,
    sapObjectNodeType.name: 'SlsDocumentChangeDocumentItem',
    supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
}

@VDM.viewType: #CONSUMPTION

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
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesDocument'],
                    tableElement: ['vbeln']
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

define view C_SalesChangeDocItemDEX
  as select from    I_ChangeDocumentItem as ChangeItem
 
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapSDH on FieldmapSDH.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapSDH.Objname  = 'I_SALESDOCUMENTBASIC'
                                                                      and ( FieldmapSDH.TabName  = 'VBAK' or FieldmapSDH.TabName  = 'E_SALESDOCUMENTBASIC' )
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapSDI on FieldmapSDI.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapSDI.Objname  = 'I_SALESDOCUMENTITEM'
                                                                      and ( FieldmapSDI.TabName  = 'VBAP' or FieldmapSDI.TabName  = 'E_SALESDOCUMENTITEMBASIC' )
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapSDS on  FieldmapSDS.TabName  = 'VBEP'
                                                                      and FieldmapSDS.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapSDS.Objname  = 'I_SALESDOCUMENTSCHEDULELINE'
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapSDP on  FieldmapSDP.TabName  = 'VBPA'
                                                                      and FieldmapSDP.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapSDP.Objname  = 'I_SDDOCUMENTCOMPLETEPARTNERS'
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapPRC on  FieldmapPRC.TabName  = 'PRCD_ELEMENTS'
                                                                      and FieldmapPRC.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapPRC.Objname  = 'I_PRICINGELEMENT'
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapBP  on  FieldmapBP.TabName  = 'FPLA'
                                                                      and FieldmapBP.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapBP.Objname  = 'I_SLSDOCITEMBILLINGPLAN'
    left outer to one join P_FieldMappingReqdForChangeDoc     as FieldmapSDB on  FieldmapSDB.TabName  = 'VBKD'
                                                                      and FieldmapSDB.DDICName = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapSDB.Objname  = 'I_SALESDOCUMENTITEM'
                                                                      
    inner join      I_SalesDocument      as SDI         on SDI.SalesDocument = ChangeItem.ChangeDocObject 
    
  association [0..1] to I_ChangeDocument              as _ChangeDocument              on  $projection.ChangeDocObjectClass = _ChangeDocument.ChangeDocObjectClass
                                                                                      and $projection.ChangeDocObject      = _ChangeDocument.ChangeDocObject
                                                                                      and $projection.ChangeDocument       = _ChangeDocument.ChangeDocument

  association [0..1] to I_ChangeDocLongTableKey       as _ChangeDocLongTableKey       on  $projection.ChangeDocTableKey = _ChangeDocLongTableKey.ChangeDocKeyGuid

  association [0..1] to I_ChangeDocumentItemExtension as _ChangeDocumentItemExtension on  $projection.ChangeDocTableKey = _ChangeDocumentItemExtension.ChangeDocKeyGuid

{
      @Consumption.hidden
  key ChangeDocObject,
      @Consumption.hidden
  key ChangeDocObjectClass,
      @Consumption.hidden
  key ChangeDocument,
      @Consumption.hidden
  key DatabaseTable,
      @Consumption.hidden
  key ChangeDocTableKey,
      @Consumption.hidden
  key ChangeDocDatabaseTableField,

  key ChangeDocItemChangeType,

      case
      when ( DatabaseTable = 'VBAK'
        or     DatabaseTable = 'VBAP'
        or     DatabaseTable = 'VBEP'
        or     DatabaseTable = 'VBPA'
        or     DatabaseTable = 'VBKD' )
        and    ChangeDocDatabaseTableField = 'KEY'
      then
        cast('SalesDocument'as fieldname )
      when ( DatabaseTable = 'VBAK' )
        then
          FieldmapSDH.GFNName
      when ( DatabaseTable = 'VBAP' )
        then
          FieldmapSDI.GFNName
      when ( DatabaseTable = 'VBKD' )
        then
          FieldmapSDB.GFNName
      when ( DatabaseTable = 'VBPA' )
        then
          FieldmapSDP.GFNName
      when ( DatabaseTable = 'VBEP' )
        then
          FieldmapSDS.GFNName
      when ( DatabaseTable = 'FPLA')
          and    ChangeDocDatabaseTableField = 'KEY'
        then
          cast('BillingPlan' as fieldname )
      when ( DatabaseTable = 'KONVC')
          and    ChangeDocDatabaseTableField = 'KEY'
        then
          cast('SalesDocumentCondition' as fieldname )
      when ( DatabaseTable = 'KONVC' )
        then
          FieldmapPRC.GFNName
      else
        ChangeDocDatabaseTableField end as ChangeDocGlobalFieldName,
      -- Fieldmap.GFNName    as ChangeGLobalFieldName,

      ChangeDocObject                 as SalesDocument,

      case
      when DatabaseTable = 'VBAP' or
           DatabaseTable = 'VBPA' or
           DatabaseTable = 'VBEP' or
           DatabaseTable = 'VBKD'
      then
      substring(ChangeDocTableKey, 14, 6)
      else '000000' end               as SalesDocumentItem,


      case
      when DatabaseTable = 'VBEP'
      then
      substring(ChangeDocTableKey, 20, 4)
      else '0000' end                 as ScheduleLine,

      case
      when DatabaseTable = 'VBPA'
      then
      substring(ChangeDocTableKey, 20, 4)
      else '0000' end                 as PartnerFunction,



      case
      when DatabaseTable = 'KONVC'
      then
      SDI.SalesDocumentCondition
      else '0000000000' end           as SalesDocumentCondition,



      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      ChangeDocTextIsChanged,

      _ChangeDocument.CreationDate,
      _ChangeDocument.CreationTime,

--AlTa (vsAlTo) 13.8.2020: in theory no need for associations because anyway not supported by DEX framework. Recommendation: do it similar to other extractors !
      _ChangeDocument,
      _ChangeDocLongTableKey,
      _ChangeDocumentItemExtension
}
where
  ChangeItem.ChangeDocObjectClass = 'VERKBELEG'
```
