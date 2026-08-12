---
name: I_SALESDOCUMENTITEMTYPE
description: "Salesdocumentitemtype"
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
  - sales-document
  - document
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTITEMTYPE

**Salesdocumentitemtype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentItemType` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDocumentItemTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SalesDocumentItemType'
@ObjectModel.sapObjectNodeType.name: 'SalesDocumentItemType'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S  
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Sales Document Item Type'
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCITEMTYP'
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentItemType 
as select from dd07l

association [0..*] to I_SalesDocumentItemTypeText as _Text on $projection.SalesDocumentItemType = _Text.SalesDocumentItemType
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as SalesDocumentItemType,
    
    _Text
}

where (dd07l.domname = 'POSAR') and (dd07l.as4local = 'A');
```
