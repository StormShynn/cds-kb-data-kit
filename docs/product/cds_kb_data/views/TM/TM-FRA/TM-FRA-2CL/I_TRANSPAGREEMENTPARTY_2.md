---
name: I_TRANSPAGREEMENTPARTY_2
description: "Transpagreementparty 2"
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
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGREEMENTPARTY_2

**Transpagreementparty 2**

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
| `TranspAgrmtBusinessPartnerUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_fag_bp_uuid preserving type)` |  |  |
| `TransportationAgreementUUID` |  | |  | `cast(parent_key as /scmtms/transpagrmt_uuid preserving type)` |  |  |
| `BusinessPartner` |  | |  | `ptyintid_id133_i` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_TransportationAgreement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AccessControl: {  authorizationCheck: #MANDATORY,
                   personalData.blocking:#('TRANSACTIONAL_DATA'),
                   privilegedAssociations: ['_TransportationAgreement']}
@EndUserText.label: 'Transportation Agreement Party'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {   sapObjectNodeType.name: 'FreightAgreementParty',
                    representativeKey:  'TranspAgrmtBusinessPartnerUUID',
                    usageType:          { serviceQuality: #A,
                                          sizeCategory:   #L,
                                          dataClass:      #TRANSACTIONAL },
                    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           {  viewType:           #BASIC,
                   lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspAgreementParty_2
  as select from /scmtms/d_fagpty
  association        to parent I_TransportationAgreement as _TransportationAgreement on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID

  association [0..1] to I_BusinessPartner                as _BusinessPartner         on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
  key cast(db_key as /scmtms/vdm_fag_bp_uuid preserving type)       as TranspAgrmtBusinessPartnerUUID,
      @ObjectModel.foreignKey.association: '_TransportationAgreement'
      cast(parent_key  as /scmtms/transpagrmt_uuid preserving type) as TransportationAgreementUUID,
      ptyintid_id133_i                                              as BusinessPartner,

      //Associations
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationAgreement,
      _BusinessPartner
}
```
