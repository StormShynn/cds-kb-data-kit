---
name: I_CTRLPOSTGEXTWHSEMGMTSYSTTXT
description: "Ctrlpostgextwhsemgmtsysttxt"
app_component: MM-IM-VDM-SGM-2CL
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
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_CTRLPOSTGEXTWHSEMGMTSYSTTXT

**Ctrlpostgextwhsemgmtsysttxt**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
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
| `CtrlPostgForExtWhseMgmtSyst` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as bfwms )` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `CtrlPostgForWhseMgmtSystName` |  | |  | `cast(ddtext as nsdm_ewm_control_posting_text preserving type)` |  |  |
| `_CtrlPostgExtWhseMgmtSyst` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CtrlPostgExtWhseMgmtSyst` | `I_CtrlPostgForExtWhseMgmtSyst` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics: { technicalName: 'ICtrlPostgForEWMTxt',
              dataExtraction.enabled:true }

@EndUserText.label: 'Control Postg for EWM System - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CtrlPostgForExtWhseMgmtSyst',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                sapObjectNodeType.name: 'CtrlPostgForExtWhseMgmtSystTxt',
                usageType: { serviceQuality: #C, 
                             dataClass: #META, 
                             sizeCategory: #S } }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_CtrlPostgExtWhseMgmtSystTxt 
  as select from dd07t

  association [0..1] to I_CtrlPostgForExtWhseMgmtSyst  as _CtrlPostgExtWhseMgmtSyst on $projection.CtrlPostgForExtWhseMgmtSyst = _CtrlPostgExtWhseMgmtSyst.CtrlPostgForExtWhseMgmtSyst
  association [0..1] to I_Language                     as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CtrlPostgExtWhseMgmtSyst'
  key cast(substring(domvalue_l, 1, 1) as bfwms )      as CtrlPostgForExtWhseMgmtSyst,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)        as Language,

      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      @Search.defaultSearchElement: true
      cast(ddtext as nsdm_ewm_control_posting_text preserving type) as CtrlPostgForWhseMgmtSystName,

      //Associations
      _CtrlPostgExtWhseMgmtSyst,
      _Language

}
where domname  = 'BFWMS'
  and as4local = 'A'
  and as4vers  = '0000';
```
