---
name: I_TRANSPAGREEMENTDESCRIPTION_2
description: Transpagreementdescription 2
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
  - text-view
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGREEMENTDESCRIPTION_2

**Transpagreementdescription 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspAgreementDescUUID` | `cast(db_key as /scmtms/vdm_fag_desc_uuid preserving type)` |
| `TransportationAgreementUUID` | `cast(parent_key as /scmtms/transpagrmt_uuid preserving type)` |
| `TransportationAgreementDesc` | `cast(description as /scmtms/vdm_fag_desc preserving type)` |
| `_TransportationAgreement` | *Association* |

## Source Code

```abap
@AccessControl: {  authorizationCheck: #MANDATORY }
@Analytics.technicalName: 'ITFAGDESCRIPTION'
@EndUserText.label: 'Transportation Agreement Description'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {   sapObjectNodeType.name: 'FreightAgreementDesc',
                    representativeKey:  'TranspAgreementDescUUID',
                    usageType:          { serviceQuality: #A,
                                          sizeCategory:   #L,
                                          dataClass:      #TRANSACTIONAL },
                    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }

@VDM:           {  viewType:           #BASIC,
                   lifecycle.contract.type: #PUBLIC_LOCAL_API  }

define view entity I_TranspAgreementDescription_2
  as select from /scmtms/d_fagrtt
  association to parent I_TransportationAgreement as _TransportationAgreement on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID
{
  key cast(db_key as /scmtms/vdm_fag_desc_uuid preserving type)     as TranspAgreementDescUUID,
      cast(parent_key  as /scmtms/transpagrmt_uuid preserving type) as TransportationAgreementUUID,
      cast(description as /scmtms/vdm_fag_desc preserving type)     as TransportationAgreementDesc,

      //Associations//
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _TransportationAgreement
}
```
