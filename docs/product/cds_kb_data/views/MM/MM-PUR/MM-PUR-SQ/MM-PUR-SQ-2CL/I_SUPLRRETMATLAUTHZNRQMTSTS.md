---
name: I_SUPLRRETMATLAUTHZNRQMTSTS
description: "Suplr Ret Matl Authzn Rqmt Sts"
app_component: MM-PUR-SQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTS')/$value
semantic_en: "Suplr Ret Matl Authzn Rqmt Sts"
semantic_vi: "Suplr Ret Matl Authzn Rqmt Sts — CDS view giao diện dựa trên dd07l."
keywords:
  - "suplr"
  - "ret"
  - "matl"
  - "authzn"
  - "rqmt"
  - "sts"
  - "domain"
  - "value"
tags:
  - MM
  - component:MM-PUR-SQ-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-SQ
  - MM-PUR-SQ-2CL
---
# I_SUPLRRETMATLAUTHZNRQMTSTS

**Suplr Ret Matl Authzn Rqmt Sts**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrRetMatlAuthznRqmtSts` | ✓ | |  | `cast( dd07l.domvalue_l as msr_vrma_req_eine )` | `CHAR(1)` | Supplier RMA Number Required |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Suplr Ret Matl Authzn Rqmt Sts'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'SuplrRetMatlAuthznRqmtSts'
@ObjectModel.sapObjectNodeType.name: 'SuplrRetMatlAuthznRqmtStatus'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view entity I_SuplrRetMatlAuthznRqmtSts
  as select from dd07l
  composition [0..*] of I_SuplrRetMatlAuthznRqmtStsTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as msr_vrma_req_eine ) as SuplrRetMatlAuthznRqmtSts,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                              as DomainValue,
      _Text
}
where
      dd07l.domname  = 'MSR_VRMA_REQ_EINE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
