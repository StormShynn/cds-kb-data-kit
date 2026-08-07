---
name: I_TRANSPAGRMTORGANIZATION_2
description: "Transpagrmtorganization 2"
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
# I_TRANSPAGRMTORGANIZATION_2

**Transpagrmtorganization 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspAgrmtOrganizationUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_fag_org_uuid preserving type)` |  |  |
| `TransportationAgreementUUID` |  | |  | `cast(parent_key as /scmtms/transpagrmt_uuid preserving type)` |  |  |
| `TranspPurgOrg` |  | |  | `purch_org` |  |  |
| `_PurchasingOrg` | | ✓ | | | | |
| `_TransportationAgreement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingOrg` | `I_TranspPurgOrg` | [1..1] |

## Source Code

```abap
@AccessControl: {  authorizationCheck: #MANDATORY,
                   privilegedAssociations: ['_TransportationAgreement']}
@EndUserText.label: 'Transportation Agreement Organization'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {   sapObjectNodeType.name: 'FreightAgreementOrganization',
                    representativeKey:  'TranspAgrmtOrganizationUUID',
                    usageType:          { serviceQuality: #A,
                                          sizeCategory:   #L,
                                          dataClass:      #TRANSACTIONAL },
                    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           {  viewType:           #BASIC,
                   lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspAgrmtOrganization_2
  as select from /scmtms/d_fagctr
  association        to parent I_TransportationAgreement as _TransportationAgreement on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID
  association [1..1] to I_TranspPurgOrg                  as _PurchasingOrg           on $projection.TranspPurgOrg = _PurchasingOrg.TranspPurgOrg
{
  key cast(db_key as /scmtms/vdm_fag_org_uuid preserving type)      as TranspAgrmtOrganizationUUID,
      @ObjectModel.foreignKey.association: '_TransportationAgreement'
      cast(parent_key  as /scmtms/transpagrmt_uuid preserving type) as TransportationAgreementUUID,
      purch_org                                                     as TranspPurgOrg,

      //Associations//
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
      _TransportationAgreement,
      _PurchasingOrg
}
```
