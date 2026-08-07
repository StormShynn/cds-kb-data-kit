---
name: I_SGLWHSEDELIVCODE
description: "Sglwhsedelivcode"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SGLWHSEDELIVCODE

**Sglwhsedelivcode**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SingleWarehouseDeliveryCode` | ✓ | |  | `cast (left(dd07l.domvalue_l, 1 ) as lnspl_likp preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: { viewEnhancementCategory: [#NONE] }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText.label: 'Single Warehouse Delivery Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: { serviceQuality: #A,
               sizeCategory: #S,
               dataClass: #META },
  resultSet: { sizeCategory: #XS },
  representativeKey: 'SingleWarehouseDeliveryCode',
  modelingPattern: #ANALYTICAL_DIMENSION,
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER ],
  sapObjectNodeType: { name: 'SingleWarehouseDeliveryCode' } }
@Search.searchable: true
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true,
              internalName: #LOCAL }
@Consumption.ranked: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SglWhseDelivCode 
  as select from dd07l
  composition [0..*] of I_SglWhseDelivCodeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast (left(dd07l.domvalue_l, 1 ) as lnspl_likp  preserving type ) as SingleWarehouseDeliveryCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                   as DomainValue,

      _Text
}
where
      dd07l.domname  = 'LNSPL_LIKP'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
