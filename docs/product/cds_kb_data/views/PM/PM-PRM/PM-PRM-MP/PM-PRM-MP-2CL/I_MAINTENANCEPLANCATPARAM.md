---
name: I_MAINTENANCEPLANCATPARAM
description: "Maintenance PlanCATPARAM"
app_component: PM-PRM-MP-2CL
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
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - maintenance-plan
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPLANCATPARAM

**Maintenance PlanCATPARAM**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
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
| `MaintenancePlanCategory` | ✓ | |  | `mptyp` |  |  |
| `MaintenancePlanCallObject` |  | |  | `call_type` |  |  |
| `MaintPlanExternalRangeCode` |  | |  | `wpext` |  |  |
| `MaintPlanInternalRangeCode` |  | |  | `wpint` |  |  |
| `MaintPlanIncludeScreenCatCode` |  | |  | `dynnr` |  |  |
| `OrderCategoryScreenTypeCode` |  | |  | `screenty` |  |  |
| `MaintPlanHasContract` |  | |  | `mpcontract` |  |  |
| `MaintCallDteHasSeparateCompltn` |  | |  | `mpconfdate` |  |  |
| `ChangeDocumentCreationIsActive` |  | |  | `mpchanged` |  |  |
| `MaintPlnSchedgRelIsToBeChgDocd` |  | |  | `chdoc_rcal` |  |  |
| `MaintItemCausesAreDisplayed` |  | |  | `show_urkat` |  |  |
| `MaintItemReasonsAreDisplayed` |  | |  | `show_rekat` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintenancePlanCatParamT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMAINTPLNCAT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Plan Category Parameter'
@ObjectModel: {
   usageType.serviceQuality: #B,
   usageType.sizeCategory: #M,
   usageType.dataClass: #ORGANIZATIONAL
}
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'MaintenancePlanCategory'
@ObjectModel.resultSet.sizeCategory: #XS

@ObjectModel.semanticKey: 'MaintenancePlanCategory'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePlanCategory'
@Analytics: {
    dataExtraction: { 
        enabled: true,
        delta.changeDataCapture: {
              automatic: true
        }
    }
}

define view I_MaintenancePlanCatParam
  as select from t399w

  association [0..*] to I_MaintenancePlanCatParamT as _Text on _Text.MaintenancePlanCategory = $projection.MaintenancePlanCategory

{
      @ObjectModel.text.association: '_Text'
  key t399w.mptyp      as MaintenancePlanCategory,

      t399w.call_type  as MaintenancePlanCallObject,
      t399w.wpext      as MaintPlanExternalRangeCode,
      t399w.wpint      as MaintPlanInternalRangeCode,
      t399w.dynnr      as MaintPlanIncludeScreenCatCode,
      t399w.screenty   as OrderCategoryScreenTypeCode,
      t399w.mpcontract as MaintPlanHasContract,
      t399w.mpconfdate as MaintCallDteHasSeparateCompltn,
      t399w.mpchanged  as ChangeDocumentCreationIsActive,
      t399w.chdoc_rcal as MaintPlnSchedgRelIsToBeChgDocd,
      t399w.show_urkat as MaintItemCausesAreDisplayed,
      t399w.show_rekat as MaintItemReasonsAreDisplayed,
      // Propagate association(s)
      _Text
}
```
