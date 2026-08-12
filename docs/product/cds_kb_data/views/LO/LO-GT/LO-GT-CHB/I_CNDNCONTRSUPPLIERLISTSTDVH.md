---
name: I_CNDNCONTRSUPPLIERLISTSTDVH
description: "This CDS view exposes the values for the Condition Contract Supplier List."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERLISTSTDVH')/$value
semantic_en: "This CDS view exposes the values for the Condition Contract Supplier List."
semantic_vi: "Condition Contract Supplier List — CDS view tổng hợp dựa trên I_ConditionContract."
keywords:
  - "condition"
  - "contract"
  - "supplier"
  - "list"
  - "cndn"
  - "contr"
  - "type"
  - "desc"
  - "distribution"
  - "channel"
  - "division"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRSUPPLIERLISTSTDVH

**This CDS view exposes the values for the Condition Contract Supplier List.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `CndnContrTypeDesc` |  | |  | `CoCoType._Text[1: Language = $session.system_language ].CndnContrTypeDesc` | `CHAR(40)` | Condition Contract Type Description |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERLISTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPPLIERLISTSTDVH')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory:          #VALUE_HELP,
   representativeKey:     'ConditionContract',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER],
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@Analytics.technicalName: 'ICCSUPLRLIST_SVH'
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Condition Contract Supplier List'
@Metadata.ignorePropagatedAnnotations: true
@UI.textArrangement: #TEXT_FIRST
@Search.searchable: true

define view entity I_CndnContrSupplierListStdVH
  as select from I_ConditionContract as CoCo
    inner join   I_CndnContrType     as CoCoType on CoCo.CndnContrType = CoCoType.CndnContrType
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key CoCo.ConditionContract                                                    as ConditionContract,

      @ObjectModel.text.element:  [ 'CndnContrTypeDesc' ]
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI.textArrangement: #TEXT_FIRST
      CoCo.CndnContrType                                                        as CndnContrType,
      @Semantics.text:true
      @Consumption.filter.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      CoCoType._Text[1: Language = $session.system_language ].CndnContrTypeDesc as CndnContrTypeDesc,

      @Consumption.hidden: true
      CoCo.DistributionChannel                                                  as DistributionChannel,
      @Consumption.hidden: true
      CoCo.Division                                                             as Division,
      @Consumption.hidden: true
      CoCo.PurchasingGroup                                                      as PurchasingGroup,
      @Consumption.hidden: true
      CoCo.PurchasingOrganization                                               as PurchasingOrganization,
      @Consumption.hidden: true
      CoCo.SalesOrganization                                                    as SalesOrganization,
      @Semantics.businessDate.from: true
      CoCo.CndnContrValidFrom                                                   as CndnContrValidFrom,
      @Semantics.businessDate.to: true
      CoCo.CndnContrValidTo                                                     as CndnContrValidTo

}
where
      CoCoType.CndnContrHasNoConditions = 'X'
  and CoCoType.CndnContrEligibleCat     = 'V' //Supplier
  and CoCoType.CndnContrItemCategory    = ' '
```
