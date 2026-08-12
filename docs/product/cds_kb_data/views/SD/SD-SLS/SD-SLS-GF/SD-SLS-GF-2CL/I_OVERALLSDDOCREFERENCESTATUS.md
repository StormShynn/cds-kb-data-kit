---
name: I_OVERALLSDDOCREFERENCESTATUS
description: "Overallsddocreferencestatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_OVERALLSDDOCREFERENCESTATUS

**Overallsddocreferencestatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallSDDocReferenceStatus` | ✓ | |  | `cast (substring(dd07l.domvalue_l, 1, 1) as rfstk preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallSDDocReferenceStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel: {
  dataCategory: #VALUE_HELP, 
  representativeKey: 'OverallSDDocReferenceStatus',
  sapObjectNodeType.name: 'OverallSDDocReferenceStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A, 
    sizeCategory: #S
  },
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@EndUserText.label: 'Overall SD Document Reference Status'
@Analytics: { dataCategory: #DIMENSION}
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRDOCREFSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true

define view I_OverallSDDocReferenceStatus 
as select from dd07l

association [0..*] to I_OverallSDDocReferenceStatusT as _Text on $projection.OverallSDDocReferenceStatus = _Text.OverallSDDocReferenceStatus
{
    @ObjectModel.text.association: '_Text'
    key cast (substring(dd07l.domvalue_l, 1, 1) as rfstk preserving type ) as OverallSDDocReferenceStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
