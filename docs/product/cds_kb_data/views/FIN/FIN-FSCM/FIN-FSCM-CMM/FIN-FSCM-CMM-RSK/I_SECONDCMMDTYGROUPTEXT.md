---
name: I_SECONDCMMDTYGROUPTEXT
description: "Secnd Cust Specific Cmdty GrpName - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUPTEXT')/$value
semantic_en: "Secnd Cust Specific Cmdty GrpName - Text"
semantic_vi: "Secnd Cust Specific Cmdty GrpName - Text — CDS view giao diện dựa trên trcoc_cty_grp2_t."
keywords:
  - "secnd"
  - "cust"
  - "specific"
  - "cmdty"
  - "grpname"
  - "text"
  - "second"
  - "cmmdty"
  - "group"
  - "language"
  - "spcfc"
  - "name"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_SECONDCMMDTYGROUPTEXT

**Secnd Cust Specific Cmdty GrpName - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecondCustSpecificCmmdtyGroup` | ✓ | |  | `group_id` | `CHAR(3)` | Commodity Group2 |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `SecondCustSpcfcCmmdtyGrpName` |  | |  | `group_id_text` | `CHAR(30)` | Commodity Group Text |
| `_Language` | | ✓ | | | | |
| `_SecondGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SecondGroup` | `I_SecondCmmdtyGroup` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUPTEXT')/$value)*

```abap
@EndUserText.label: 'Secnd Cust Specific Cmdty GrpName - Text'
//@Analytics.dataCategory: #DIMENSION
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'ISECNDCMMDTYGRPT'
@ObjectModel.representativeKey: 'SecondCustSpecificCmmdtyGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #SQL_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_SecondCmmdtyGroupText
   as select from trcoc_cty_grp2_t
  
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_SecondCmmdtyGroup as _SecondGroup
      on $projection.SecondCustSpecificCmmdtyGroup = _SecondGroup.SecondCustSpecificCmmdtyGroup

{

   key group_id as SecondCustSpecificCmmdtyGroup,
   @Semantics.language: true
   key language as Language,
   @Semantics.text: true
       group_id_text as SecondCustSpcfcCmmdtyGrpName,
       _Language,
       _SecondGroup
  
}
```
