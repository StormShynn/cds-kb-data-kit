---
name: I_QTNLIFECYCLESTATUS
description: "Qtnlifecyclestatus"
app_component: MM-PUR-RFQ-2CL
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
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - status
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_QTNLIFECYCLESTATUS

**Qtnlifecyclestatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
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
| `QtnLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as vdm_qtn_lfst_cd )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_QtnLifecycleStatusText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'QTNLifecycleStatus'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Quotation Lifecycle Status'
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IQTNLIFESTS'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE   
                                  
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'RFQLifecycleStatus'
define view I_QtnLifecycleStatus
  as select from dd07l
  association [0..*] to I_QtnLifecycleStatusText as _Text on $projection.QtnLifecycleStatus = _Text.QtnLifecycleStatus
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 2 ) as vdm_qtn_lfst_cd ) as QtnLifecycleStatus,
      _Text
}
where
      domname  = 'VDM_QTN_LFST_CD'
  and as4local = 'A'
```
