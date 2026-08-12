---
name: I_SETTLMTAPPLSTSGRPSTSASSGMT
description: "Settlement Application Status Group Assignment"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPSTSASSGMT')/$value
semantic_en: "Settlement Application Status Group Assignment"
semantic_vi: "Settlmt Appl Status Group Assignment — CDS view cơ bản dựa trên R_SettlmtApplStsGrpStsAssgmt."
keywords:
  - "settlmt"
  - "appl"
  - "status"
  - "group"
  - "assignment"
  - "aprvd"
  - "rjctd"
  - "rlvt"
  - "proc"
tags:
  - LO
  - bo:project
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTAPPLSTSGRPSTSASSGMT

**Settlement Application Status Group Assignment**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPSTSASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtApplStsGrp` | ✓ | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SettlmtApplSts` | ✓ | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsAprvd` |  | |  |  | `CHAR(4)` | Application Status Approved |
| `SettlmtApplStsRjctd` |  | |  |  | `CHAR(4)` | Application Status Rejected |
| `ApplStsIsRlvtForRelProc` |  | |  |  | `CHAR(1)` | Release Process Active for Application Status |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPSTSASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPSTSASSGMT')/$value)*

```abap
@EndUserText.label: 'Settlmt Appl Status Group Assignment' 
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtApplSts',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSTGPSTSASG'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtApplStsGrpStsAssgmt
  as select from R_SettlmtApplStsGrpStsAssgmt

  association [0..1] to I_SettlmtApplStsGrp as _SettlmtApplStsGrp on $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplSts    as _SettlmtApplSts    on $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts

{
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
  key SettlmtApplStsGrp,
  key SettlmtApplSts,
      SettlmtApplStsAprvd,
      SettlmtApplStsRjctd,
      ApplStsIsRlvtForRelProc,

      /* Associations */
      _SettlmtApplStsGrp,
      _SettlmtApplSts
}
```
