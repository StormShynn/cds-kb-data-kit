---
name: I_OVERALLSDDOCUMENTRJCNSTATUS
description: "Overallsddocumentrjcnstatus"
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
  - document
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLSDDOCUMENTRJCNSTATUS

**Overallsddocumentrjcnstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallSDDocumentRejectionSts` | ✓ | |  | `cast (substring(dd07l.domvalue_l, 1, 1) as abstk preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallSDDocumentRjcnStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'OverallSDDocumentRejectionSts',
  sapObjectNodeType.name: 'OverallSDDocumentRejectionSts',
  usageType: {
    dataClass: #META, 
    serviceQuality: #A, 
    sizeCategory: #S
  },
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@EndUserText.label: 'Overall SD Document Rejection Status'
@Analytics: { dataCategory: #DIMENSION}
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVDOCRJCNSTS' 
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true

define view I_OverallSDDocumentRjcnStatus
as select from dd07l

association [0..*] to I_OverallSDDocumentRjcnStatusT as _Text on $projection.OverallSDDocumentRejectionSts = _Text.OverallSDDocumentRejectionSts
{
    @ObjectModel.text.association: '_Text'
    key cast (substring(dd07l.domvalue_l, 1, 1) as abstk preserving type ) as OverallSDDocumentRejectionSts,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
