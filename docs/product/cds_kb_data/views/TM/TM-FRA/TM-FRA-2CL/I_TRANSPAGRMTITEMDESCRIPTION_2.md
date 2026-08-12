---
name: I_TRANSPAGRMTITEMDESCRIPTION_2
description: "Transpagrmtitemdescription 2"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - text-view
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGRMTITEMDESCRIPTION_2

**Transpagrmtitemdescription 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspAgreementItemDescUUID` | ✓ | |  | `cast(db_key as /scmtms/transpagritemtext_uuid preserving type)` |  |  |
| `TransportationAgreementUUID` |  | |  | `cast(root_key as /scmtms/transpagrmt_uuid preserving type)` |  |  |
| `TranspAgreementItemUUID` |  | |  | `cast(parent_key as /scmtms/transpagrmt_itm_uuid preserving type)` |  |  |
| `TranspAgreementItemDesc` |  | |  | `cast(description as /scmtms/vdm_fag_item_desc preserving type)` |  |  |
| `_TranspAgreementItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY}
@Analytics.technicalName: 'ITFAGITDESCRIPTION'
@EndUserText: {label: 'Transp Agreement Item Description'}
@ObjectModel: {sapObjectNodeType.name: 'FreightAgreementItemDesc',
               representativeKey: 'TranspAgreementItemDescUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspAgrmtItemDescription_2
  as select from /scmtms/d_fagitt
  association to parent I_TranspAgreementItem_2 as _TranspAgreementItem on $projection.TranspAgreementItemUUID = _TranspAgreementItem.TranspAgreementItemUUID
{
  key cast(db_key as /scmtms/transpagritemtext_uuid preserving type)   as TranspAgreementItemDescUUID,
      cast(root_key  as /scmtms/transpagrmt_uuid preserving type)      as TransportationAgreementUUID,
      cast(parent_key as /scmtms/transpagrmt_itm_uuid preserving type) as TranspAgreementItemUUID,
      cast(description as /scmtms/vdm_fag_item_desc preserving type)   as TranspAgreementItemDesc,

      /* Associations */
      _TranspAgreementItem
}
```
