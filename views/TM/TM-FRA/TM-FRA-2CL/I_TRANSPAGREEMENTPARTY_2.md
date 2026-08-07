---
name: I_TRANSPAGREEMENTPARTY_2
description: Transpagreementparty 2
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
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
