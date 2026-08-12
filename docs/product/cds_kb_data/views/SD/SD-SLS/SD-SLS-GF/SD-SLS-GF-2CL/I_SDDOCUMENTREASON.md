---
name: I_SDDOCUMENTREASON
description: "Sddocumentreason"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - document
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTREASON

**Sddocumentreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocumentReason` | ✓ | |  | `augru` |  |  |
| `RetroBillingUsage` |  | |  | `vauna` |  |  |
| `SelfBillingValueItem` |  | |  | `vaugv` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SDDocumentReasonText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SDDocumentReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Order Reason'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSDDOCREASON' 
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION, 
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY  ]
@ObjectModel.sapObjectNodeType.name:'SalesDocumentReason'                                        
                                        
define view I_SDDocumentReason
as select from tvau
association [0..*] to I_SDDocumentReasonText  as _Text on $projection.SDDocumentReason = _Text.SDDocumentReason
{   
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
    @ObjectModel.text.association: '_Text'
    key augru as SDDocumentReason,
    vauna as RetroBillingUsage,
    vaugv as SelfBillingValueItem,
    //Associations
    _Text
};
```
