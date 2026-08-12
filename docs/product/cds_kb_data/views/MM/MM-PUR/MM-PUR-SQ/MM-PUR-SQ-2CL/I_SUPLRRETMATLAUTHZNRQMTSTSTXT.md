---
name: I_SUPLRRETMATLAUTHZNRQMTSTSTXT
description: "Suplr Ret Matl Authzn Rqmt Sts - Text"
app_component: MM-PUR-SQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTSTXT')/$value
semantic_en: "Suplr Ret Matl Authzn Rqmt Sts - Text"
semantic_vi: "Suplr Ret Matl Authzn Rqmt Sts - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "suplr"
  - "ret"
  - "matl"
  - "authzn"
  - "rqmt"
  - "sts"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - MM
  - component:MM-PUR-SQ-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-SQ
  - MM-PUR-SQ-2CL
---
# I_SUPLRRETMATLAUTHZNRQMTSTSTXT

**Suplr Ret Matl Authzn Rqmt Sts - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `SuplrRetMatlAuthznRqmtSts` | ✓ | |  | `cast( dd07t.domvalue_l as msr_vrma_req_eine )` | `CHAR(1)` | Supplier RMA Number Required |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SuplrRetMatlAuthznRqmtStsName` |  | |  | `cast ( dd07t.ddtext as msr_vrma_req_eine_name preserving type )` | `CHAR(60)` | Supplier RMA Number Required Name |
| `_Language` | | ✓ | | | | |
| `_SuplrRetMatlAuthznRqmtSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRRETMATLAUTHZNRQMTSTSTXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ISUREMAAURQSTTE'
@EndUserText.label: 'Suplr Ret Matl Authzn Rqmt Sts - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'SuplrRetMatlAuthznRqmtSts'
@ObjectModel.sapObjectNodeType.name: 'SuplrRetMatlAuthznRqmtStsTxt'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SuplrRetMatlAuthznRqmtStsTxt
  as select from dd07t
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
  association        to parent I_SuplrRetMatlAuthznRqmtSts as _SuplrRetMatlAuthznRqmtSts on $projection.SuplrRetMatlAuthznRqmtSts = _SuplrRetMatlAuthznRqmtSts.SuplrRetMatlAuthznRqmtSts
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )               as Language,
      @ObjectModel.foreignKey.association: '_SuplrRetMatlAuthznRqmtSts'
      @ObjectModel.text.element: [ 'SuplrRetMatlAuthznRqmtStsName' ]
  key cast( dd07t.domvalue_l as msr_vrma_req_eine )                   as SuplrRetMatlAuthznRqmtSts,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( dd07t.ddtext as msr_vrma_req_eine_name preserving type ) as SuplrRetMatlAuthznRqmtStsName,
      _Language,
      _SuplrRetMatlAuthznRqmtSts
}
where
      dd07t.domname  = 'MSR_VRMA_REQ_EINE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
