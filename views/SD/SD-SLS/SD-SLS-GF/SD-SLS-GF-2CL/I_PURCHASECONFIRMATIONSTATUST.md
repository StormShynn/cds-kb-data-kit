---
name: I_PURCHASECONFIRMATIONSTATUST
description: "Purchaseconfirmationstatust"
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
# I_PURCHASECONFIRMATIONSTATUST

**Purchaseconfirmationstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseConfirmationStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PurchaseConfirmationStatusDesc` |  | |  | `bezei` |  |  |
| `_PurchaseConfirmationStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseConfirmationStatus` | `I_PurchaseConfirmationStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PurchaseConfirmationStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Purchase Confirmation Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@AbapCatalog.sqlViewName: 'ISDPURCONFSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_PurchaseConfirmationStatusT  
as select from tvbst 

association[0..1] to I_PurchaseConfirmationStatus as _PurchaseConfirmationStatus on $projection.PurchaseConfirmationStatus = _PurchaseConfirmationStatus.PurchaseConfirmationStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_PurchaseConfirmationStatus'
    key statu as PurchaseConfirmationStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9    
    @Search.ranking: #LOW
    bezei as PurchaseConfirmationStatusDesc,
    
    //Associations
    _PurchaseConfirmationStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'COSTA');
```
