---
name: C_SUPLREVALBYQNAIRECUBE
description: "Suplrevalbyqnairecube"
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - analytical
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLREVALBYQNAIRECUBE

**Suplrevalbyqnairecube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `SuplrEvalScorecardUUID` | ✓ | |  |  |  |  |
| `Supplier` | ✓ | |  |  |  |  |
| `SupplierEvalScorecard` |  | |  |  |  |  |
| `SuplrEvalScorecardName` |  | |  |  |  |  |
| `SuplrEvalStartDate` |  | |  |  |  |  |
| `SuplrEvalEndDate` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `Country` |  | | `_Supplier` | `Country` |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `SuplrEvalCalculatedScoreValue` |  | |  | `cast( CalculatedScore as questionnairescore )` |  |  |
| `SuplrEvalQnaireScoreValue` |  | |  | `cast( CalculatedScore as questionnairescore )` |  |  |
| `SupplierEvalScoreTargetValue` |  | |  | `TargetScore` |  |  |
| `TargetScoreValue` |  | |  | `TargetScore` |  |  |
| `NumberOfResponses` |  | |  |  |  |  |
| `AnswerScoreValue` |  | |  | `cast( MinimalScore as mm_a_min_target_score )` |  |  |
| `MinimalScoreValue` |  | |  | `cast( MinimalScore as mm_a_min_target_score )` |  |  |
| `NmbrOfSuplrEvalQnaire` |  | |  | `cast(1 as abap.int4)` |  |  |
| `_Supplier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSEQNAIRECUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation by Questionnaire Cube'
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations:true
define view C_SuplrEvalByQnaireCube

  with parameters

    P_StartDate : vdm_validitystart,
    P_EndDate   : vdm_validityend
  as select from P_SupplierEvalSoft( P_StartDate:  $parameters.P_StartDate, P_EndDate : $parameters.P_EndDate )

  association [1..1] to I_Supplier as _Supplier       on  $projection.Supplier = _Supplier.Supplier
  association [1..1] to I_Country  as _Country        on  $projection.country = _Country.Country
  association [0..1] to I_Region   as _SupplierRegion on  $projection.region  = _SupplierRegion.Region
                                                      and $projection.country = _SupplierRegion.Country
{
  key SuplrEvalScorecardUUID,
      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
  key Supplier,

      @ObjectModel.text.element: ['SuplrEvalScorecardName']
      @Consumption.labelElement: 'SuplrEvalScorecardName'
      SupplierEvalScorecard,
      @Semantics.text: true
      SuplrEvalScorecardName,

      SuplrEvalStartDate,
      SuplrEvalEndDate,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      PurchasingCategory,
      @Semantics.text: true
      PurgCatName,
      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      _Supplier.Country,
      @ObjectModel.foreignKey.association: '_SupplierRegion'
      @Analytics.internalName:#LOCAL
      _Supplier.Region,
      @DefaultAggregation:#SUM
      cast( CalculatedScore as questionnairescore ) as SuplrEvalCalculatedScoreValue,
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'SuplrEvalCalculatedScoreValue'
      @DefaultAggregation:#SUM
      cast( CalculatedScore as questionnairescore ) as SuplrEvalQnaireScoreValue,

      @DefaultAggregation:#SUM
      TargetScore                                   as SupplierEvalScoreTargetValue,
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'SupplierEvalScoreTargetValue'
      @DefaultAggregation:#SUM
      TargetScore                                   as TargetScoreValue,

      @DefaultAggregation:#SUM
      NumberOfResponses,
      @DefaultAggregation:#SUM
      cast( MinimalScore as mm_a_min_target_score ) as AnswerScoreValue,
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'AnswerScoreValue'
      @DefaultAggregation:#SUM
      cast( MinimalScore as mm_a_min_target_score ) as MinimalScoreValue,
      @DefaultAggregation:#SUM
      @EndUserText.label: 'Number of Questionnaire'
      cast(1 as abap.int4)                          as NmbrOfSuplrEvalQnaire,
      _Supplier,
      _Country,
      _SupplierRegion
}
```
