---
name: I_ACCOUNTINGCLERK
description: "Accountingclerk"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCOUNTINGCLERK

**Accountingclerk**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast (bukrs as fis_bukrs preserving type )` |  |  |
| `AccountingClerk` | ✓ | |  | `cast (busab as farp_busab preserving type )` |  |  |
| `AccountingClerkName` |  | |  | `cast (sname as farp_sname_001s preserving type )` |  |  |
| `UserID` |  | |  | `cast( usnam as vdm_userid preserving type )` |  |  |
| `_Company` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Company` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IFIACCCLERK',
//                compiler.compareFilter: true,
                preserveKey: true }
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Accounting Clerk'
@ObjectModel: { representativeKey: 'AccountingClerk',
                usageType: { serviceQuality: #A,
                             sizeCategory: #M,
                             dataClass: #CUSTOMIZING },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'AccountingClerk' }              
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC



define view I_AccountingClerk
  as select from t001s

  association [0..1] to I_CompanyCode as _Company on _Company.CompanyCode = $projection.CompanyCode

{

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Company'
  key cast (bukrs as fis_bukrs preserving type )       as CompanyCode,
      @ObjectModel.text.element: 'AccountingClerkName'
  key cast (busab as farp_busab preserving type )      as AccountingClerk,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast (sname as farp_sname_001s preserving type ) as AccountingClerkName,

      cast( usnam as vdm_userid preserving type )     as UserID,

      // associations
      _Company
}
```
