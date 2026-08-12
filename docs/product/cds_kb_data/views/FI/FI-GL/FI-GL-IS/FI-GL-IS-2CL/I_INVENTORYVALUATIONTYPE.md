---
name: I_INVENTORYVALUATIONTYPE
description: "Inventoryvaluationtype"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - inventory
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Inventory
---
# I_INVENTORYVALUATIONTYPE

**Inventoryvaluationtype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryValuationType` | ✓ | |  | `cast( t149d.bwtar as fis_inventory_valuation_type preserving type )` |  |  |
| `AcctCategoryRef` |  | |  | `cast( t149d.kkref as fis_acct_category_ref preserving type )` |  |  |
| `InternalPurchasingRule` |  | |  | `cast( t149d.bsint as fis_internal_purchasing_rule preserving type )` |  |  |
| `ExternalPurchasingRule` |  | |  | `cast( t149d.bsext as fis_external_purchasing_rule preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true }
@Analytics.technicalName: 'IFIINVVALTYPE'
@EndUserText.label: 'Inventory Valuation Type'
@ObjectModel: { representativeKey: 'InventoryValuationType',
                sapObjectNodeType.name: 'ProductValuationType', 
                usageType: { sizeCategory: #S,
                             dataClass:  #MASTER,
                             serviceQuality: #A },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION } 
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define view entity I_InventoryValuationType as select from t149d 
{
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key cast( t149d.bwtar as fis_inventory_valuation_type preserving type ) as InventoryValuationType,

  cast( t149d.kkref as fis_acct_category_ref preserving type ) as AcctCategoryRef, 
 
  cast( t149d.bsint as fis_internal_purchasing_rule preserving type ) as InternalPurchasingRule,
  
  cast( t149d.bsext as fis_external_purchasing_rule preserving type ) as ExternalPurchasingRule        
}
```
