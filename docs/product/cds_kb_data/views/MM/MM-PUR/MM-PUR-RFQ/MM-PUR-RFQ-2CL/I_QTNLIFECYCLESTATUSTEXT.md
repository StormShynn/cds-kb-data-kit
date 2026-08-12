---
name: I_QTNLIFECYCLESTATUSTEXT
description: "Qtnlifecyclestatustext"
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
  - text-view
  - text
  - status
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_QTNLIFECYCLESTATUSTEXT

**Qtnlifecyclestatustext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `QtnLifecycleStatusName` |  | |  | `cast( ddtext as vdm_qtn_lfst_descr )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'QTNLifecycleStatus'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Quotation Lifecycle Status – Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@AbapCatalog.sqlViewName: 'IQTNLIFESTSTEXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE                                     
define view I_QtnLifecycleStatusText  
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
//   association [1..1] to I_DomainGlobalFieldName as _DomainGlobalFieldName 
//      on $projection.DomainGlobalFieldName = _DomainGlobalFieldName.DomainGlobalFieldName
{
    key cast ( substring( domvalue_l, 1, 2 ) as vdm_qtn_lfst_cd ) as QtnLifecycleStatus,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as vdm_qtn_lfst_descr ) as QtnLifecycleStatusName, 
//  _DomainGlobalFieldName, //decomment only if no problems in analytics
    _Language 
}
where domname = 'VDM_QTN_LFST_CD' 
  and as4local = 'A'
```
