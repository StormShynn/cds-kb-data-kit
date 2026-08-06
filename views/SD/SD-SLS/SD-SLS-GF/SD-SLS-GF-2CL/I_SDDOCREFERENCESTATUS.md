---
name: I_SDDOCREFERENCESTATUS
description: Sddocreferencestatus
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCREFERENCESTATUS

**Sddocreferencestatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SDDocReferenceStatus` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SDDocReferenceStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    representativeKey: 'SDDocReferenceStatus',
    sapObjectNodeType.name: 'SDDocReferenceStatus',
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ],
     modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@EndUserText.label: 'SD Document Reference Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSDDOCREFSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_SDDocReferenceStatus
as select from dd07l

association [0..*] to I_SDDocReferenceStatusText as _Text on $projection.SDDocReferenceStatus = _Text.SDDocReferenceStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as SDDocReferenceStatus,
    
    @Search.defaultSearchElement: true
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
```
