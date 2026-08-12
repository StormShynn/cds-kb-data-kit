---
name: I_SUPLREVALDELIVCMPLTDCONFIGN
description: "Suplrevaldelivcmpltdconfign"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALDELIVCMPLTDCONFIGN

**Suplrevaldelivcmpltdconfign**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalCritraDelivCompleted` | ✓ | |  | `cast ( dd07l.domvalue_l as mm_pur_ana_de_delivery_compind )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMSEDELCMPC'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Analytics.dataCategory:#DIMENSION
@ObjectModel.representativeKey: 'SuplrEvalCritraDelivCompleted'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,#VALUE_HELP_PROVIDER,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Supplier Evaluation Delivery Completed Configuration'
@ObjectModel.sapObjectNodeType.name: 'SupplierEvaluationScore'
define root view I_SuplrEvalDelivCmpltdConfign
  as select from dd07l
  composition [0..*] of I_SuplrEvalDelivCmpltdConfignT as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as mm_pur_ana_de_delivery_compind ) as SuplrEvalCritraDelivCompleted,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                            as DomainValue,

      _Text

}
where
      domname       = 'MM_PUR_ANA_DM_DELIVERY_COMPIND'
  and as4local      = 'A'
  and dd07l.as4vers = '0000'
```
