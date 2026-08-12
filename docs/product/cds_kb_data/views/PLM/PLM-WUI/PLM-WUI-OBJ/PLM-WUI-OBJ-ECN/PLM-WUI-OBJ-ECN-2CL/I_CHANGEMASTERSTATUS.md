---
name: I_CHANGEMASTERSTATUS
description: "These CDS views provide the prerequisites for answering the following business questions: Which change masters are active in my system? Which change masters can be used to make changes to business objects?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERSTATUS')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business questions: Which change masters are active in my system? Which change masters can be used to make changes to business objects?"
semantic_vi: "Change Number Status — CDS view giao diện dựa trên t419s."
keywords:
  - "change"
  - "number"
  - "status"
  - "allowed"
  - "date"
  - "distribution"
  - "locked"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERSTATUS

**These CDS views provide the prerequisites for answering the following business questions: Which change masters are active in my system? Which change masters can be used to make changes to business objects?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberStatus` | ✓ | |  | `cast ( aenst as /plmb/ecn_status )` | `NUMC(2)` | Status of Change Number |
| `ChangeIsAllowed` |  | |  | `cast ( aeflg as /plmb/cc_aeflg )` | `CHAR(1)` | Status allows changes |
| `DateChangeIsAllowed` |  | |  | `cast ( dtflg as /plmb/cc_dtflg )` | `CHAR(1)` | Valid-from date can be changed |
| `DistributionIsLocked` |  | |  | `cast ( dlock as /plmb/cc_dlock )` | `CHAR(1)` | Indicator: Distribution lock |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ChangeMasterStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNSTATUS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ChangeNumberStatus'
@ObjectModel.semanticKey: [ 'ChangeNumberStatus' ]

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Status'
define view I_ChangeMasterStatus
  as select from t419s
  association [0..*] to I_ChangeMasterStatusText as _Text on $projection.ChangeNumberStatus = _Text.ChangeNumberStatus
{
      @ObjectModel.text.association: '_Text'
  key cast ( aenst as /plmb/ecn_status ) as ChangeNumberStatus,
      cast ( aeflg as /plmb/cc_aeflg   ) as ChangeIsAllowed,
      cast ( dtflg as /plmb/cc_dtflg   ) as DateChangeIsAllowed,
      cast ( dlock as /plmb/cc_dlock   ) as DistributionIsLocked,

      _Text
}
```
