---
name: C_PRODLGLCTRLCLFNFORKEYDATE
description: "Prodlglctrlclfnforkeydate"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - consumption-view
  - component:FT-ITR-CLS
  - lob:Other
---
# C_PRODLGLCTRLCLFNFORKEYDATE

**Prodlglctrlclfnforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `LegalRegulation` | ✓ | |  |  |  |  |
| `ControlClass` |  | |  |  |  |  |
| `IsTrdCmplncControlRelevant` |  | |  |  |  |  |
| `ControlGrouping` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `TrdClassfctnRemark` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ControlGroupingText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Product Legal Control Classification for Key Date'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CPRLGLCLFORKDAT'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter:true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
define view C_ProdLglCtrlClfnForKeyDate
  with parameters
    P_KeyDate : sll_validon
  as select from I_ProdLglCtrlForKeyDate   (P_KeyDate : $parameters.P_KeyDate) as _ProductLglCtrl
  association [0..1] to I_Product as _Product on _Product.Product = $projection.Product

{
  key Product,
  key LegalRegulation,
      ControlClass,
      IsTrdCmplncControlRelevant,
      @ObjectModel.text.association: '_ControlGroupingText'
      ControlGrouping,
      ValidityStartDate,
      ValidityEndDate,
      TrdClassfctnRemark,
      _ControlGroupingText,
      @Consumption.hidden: true
      _Product
}
where
      _ProductLglCtrl.ValidityStartDate <= $parameters.P_KeyDate
  and _ProductLglCtrl.ValidityEndDate   >= $parameters.P_KeyDate
```
