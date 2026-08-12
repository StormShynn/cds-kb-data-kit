---
name: I_TRANSPCOCODEBPASSGMT
description: "Transpcocodebpassgmt"
app_component: TM-MD-ORG-2CL
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
  - TM
  - TM-MD
  - TM-MD-ORG
  - interface-view
  - component:TM-MD-ORG-2CL
  - lob:Other
---
# I_TRANSPCOCODEBPASSGMT

**Transpcocodebpassgmt**

| Property | Value |
|---|---|
| App Component | `TM-MD-ORG-2CL` |
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
| `CompanyCode` | ✓ | |  | `comp_code` |  |  |
| `BusinessPartner` |  | |  | `partner` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_at` |  |  |
| `LocalInstanceLastChangedByUser` |  | |  | `local_last_changed_by` |  |  |
| `LoclInstanceLastChangeDateTime` |  | |  | `local_last_changed_at` |  |  |
| `LastChangedByUser` |  | |  | `last_changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `last_changed_at` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Company Code and Business Partner Assgmt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #ORGANIZATIONAL
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_TranspCoCodeBPAssgmt
  as select from /scmtms/ccbpas
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
      /* start suppress warning shlporigin_not_inherited*/
  key comp_code as CompanyCode,
      partner   as BusinessPartner,
       /* end suppress warning shlporigin_not_inherited */
      @Semantics.user.createdBy: true
      created_by     as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      created_at            as CreationDateTime,
      @Semantics.user.localInstanceLastChangedBy: true
      local_last_changed_by as LocalInstanceLastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      local_last_changed_at as LoclInstanceLastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      last_changed_by       as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at       as LastChangeDateTime,
      /* Associations */
      _CompanyCode,
      _BusinessPartner
}
```
