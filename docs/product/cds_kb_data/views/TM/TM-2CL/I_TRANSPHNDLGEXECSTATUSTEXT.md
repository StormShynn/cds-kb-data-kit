---
name: I_TRANSPHNDLGEXECSTATUSTEXT
description: "Transp Handling Execution Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUSTEXT')/$value
semantic_en: "Transp Handling Execution Status - Text"
semantic_vi: "I_TRANSPHNDLGEXECSTATUSTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transphndlgexecstatustext"
  - "transp"
  - "stop"
  - "hndlg"
  - "exec"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_TRANSPHNDLGEXECSTATUSTEXT

**Transp Handling Execution Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopHndlgExecStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_s_hdl_exec_status preserving type)` | `CHAR(2)` | Handling Execution Status at Stop Level |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdStopHndlgExecStsDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TranspHndlgExecStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspHndlgExecStatus` | `I_TranspHndlgExecStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUSTEXT')/$value)*

```abap
@EndUserText:   {label:              'Transp Handling Execution Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdStopHndlgExecStatus',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ITRHDLEXECSTTEXT'
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspHndlgExecStatusText
  as select from dd07t
  association [0..1] to I_TranspHndlgExecStatus as _TranspHndlgExecStatus on $projection.TranspOrdStopHndlgExecStatus = _TranspHndlgExecStatus.TranspOrdStopHndlgExecStatus
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspHndlgExecStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_s_hdl_exec_status preserving type) as TranspOrdStopHndlgExecStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                         as Language,
      @Semantics.text
      ddtext                                                                             as TranspOrdStopHndlgExecStsDesc,

      /* Associations */
      _TranspHndlgExecStatus,
      _Language
}
where
      domname  = '/SCMTMS/TOR_S_HDL_EXEC_STATUS'
  and as4local = 'A';
```
