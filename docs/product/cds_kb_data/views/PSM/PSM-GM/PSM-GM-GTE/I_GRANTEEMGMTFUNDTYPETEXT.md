---
name: I_GRANTEEMGMTFUNDTYPETEXT
description: "Grantee Management Fund Type - Text"
app_component: PSM-GM-GTE
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTFUNDTYPETEXT')/$value
semantic_en: "Grantee Management Fund Type - Text"
semantic_vi: "Grantee Management Fund Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "grantee"
  - "management"
  - "fund"
  - "type"
  - "text"
  - "language"
  - "mgmt"
  - "domain"
  - "value"
  - "name"
tags:
  - PSM
  - component:PSM-GM-GTE
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
---
# I_GRANTEEMGMTFUNDTYPETEXT

**Grantee Management Fund Type - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTFUNDTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `GranteeMgmtFundType` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.numc( 1 ) ) as gm_fundtype )` | `CHAR(1)` | Fund Type for Grants Management |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `GranteeMgmtFundTypeName` |  | |  | `cast ( substring ( ddtext, 1, 40 ) as gmis_fundtype_name )` | `CHAR(40)` | Fund Type Name in Grantee Management |
| `DomainValueName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `GrnteMgmtFundTypeNameSearchTxt` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_GranteeMgmtFundType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTFUNDTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTFUNDTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMFUNDTYPET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grantee Management Fund Type - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'GranteeMgmtFundType',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_GranteeMgmtFundTypeText
  as select from dd07t
  association        to parent I_GranteeMgmtFundType as _GranteeMgmtFundType on $projection.GranteeMgmtFundType = _GranteeMgmtFundType.GranteeMgmtFundType
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras )                                                      as Language,
      @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
      @ObjectModel.text.element: ['GranteeMgmtFundTypeName']
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.numc( 1 ) ) as gm_fundtype ) as GranteeMgmtFundType,
      @Consumption.hidden: true
      // @Analytics.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,
      @Semantics.text: true
      cast ( substring ( ddtext, 1, 40 ) as gmis_fundtype_name )                       as GranteeMgmtFundTypeName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'GrnteMgmtFundTypeNameSearchTxt'
      dd07t.ddtext                                                                     as DomainValueName, 
      @Consumption.hidden: true
      // @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07t.ddtext                                                                     as GrnteMgmtFundTypeNameSearchTxt,

      _GranteeMgmtFundType,
      _Language
}
where
      domname  = 'GM_FUNDTYPE'
  and as4local = 'A'
```
