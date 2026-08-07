---
name: I_SALESDOCUMENTRJCNREASON
description: Salesdocumentrjcnreason
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
  - sales-document
  - document
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTRJCNREASON

**Salesdocumentrjcnreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentRjcnReason` | ✓ | |  | `abgru` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDocumentRjcnReasonText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'SalesDocumentRjcnReason',
  sapObjectNodeType.name: 'SalesDocumentRjcnReason',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@EndUserText.label: 'Sales Document Rejection Reason'
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true }

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDSLSDOCRJNRSN',
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }
}
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_SalesDocumentRjcnReason
as select from tvag

association [0..*] to I_SalesDocumentRjcnReasonText as _Text on $projection.SalesDocumentRjcnReason = _Text.SalesDocumentRjcnReason
{
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    key abgru as SalesDocumentRjcnReason,

    _Text
};
```
