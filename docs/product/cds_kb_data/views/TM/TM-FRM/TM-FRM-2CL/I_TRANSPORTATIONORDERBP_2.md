---
name: I_TRANSPORTATIONORDERBP_2
description: "Transportationorderbp 2"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - transport
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORTATIONORDERBP_2

**Transportationorderbp 2**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderBusPartUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_bp_db_key preserving type )` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `BusinessPartnerUUID` |  | |  | `cast(party_uuid as bu_partner_guid preserving type)` |  |  |
| `BusinessPartner` |  | |  | `cast(party_id as bu_partner preserving type)` |  |  |
| `TranspOrdBizPartnerFunction` |  | |  | `cast(party_rco as /scmtms/vdm_partner_function preserving type )` |  |  |
| `TranspOrdBizPartnerAddressID` |  | |  | `address_id` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_TransportationOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_PartnerFunction` | `I_PartnerFunction` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:              'Transportation Order Business Partner'}
@ObjectModel:   {sapObjectNodeType.name: 'TranspOrdBusinessPartner',
                 representativeKey:  'TransportationOrderBusPartUUID',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #XL,
                                      dataClass:      #TRANSACTIONAL},
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                 modelingPattern: #ANALYTICAL_DIMENSION }
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA')}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TransportationOrderBP_2
  as select from /scmtms/d_torpty
  /* Business Object related Node Associations */
  association        to parent I_TransportationOrder_2 as _TransportationOrder on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
  association [0..1] to I_BusinessPartner              as _BusinessPartner     on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_PartnerFunction              as _PartnerFunction     on $projection.TranspOrdBizPartnerFunction = _PartnerFunction.PartnerFunction

{
  key cast(db_key as /scmtms/vdm_tor_bp_db_key preserving type )        as TransportationOrderBusPartUUID,
      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(parent_key as /scmtms/vdm_tor_db_key preserving type)        as TransportationOrderUUID,
      cast(party_uuid as bu_partner_guid preserving type)               as BusinessPartnerUUID,
      cast(party_id   as bu_partner preserving type)                    as BusinessPartner,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
      cast(party_rco  as /scmtms/vdm_partner_function preserving type ) as TranspOrdBizPartnerFunction,
      address_id                                                        as TranspOrdBizPartnerAddressID,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
      _TransportationOrder,
      _BusinessPartner,
      _PartnerFunction
}
where
  node_key = abap.raw'80E0ED0A0DD11DEEA0D448872F169C9B'
```
