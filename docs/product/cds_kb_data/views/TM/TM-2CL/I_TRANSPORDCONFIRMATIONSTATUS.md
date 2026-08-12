---
name: I_TRANSPORDCONFIRMATIONSTATUS
description: "Transpordconfirmationstatus"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - status
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDCONFIRMATIONSTATUS

**Transpordconfirmationstatus**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderConfSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_confirm_status preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText:   {label:                    'Confirmation Status'}
@Analytics:     {dataCategory:             #DIMENSION,
                 internalName:             #LOCAL}
@Analytics.technicalName: 'ITORCONFSTATUS'
@ObjectModel:   {representativeKey:        'TransportationOrderConfSts',
                 usageType:                {serviceQuality: #A,
                                            sizeCategory:   #S,
                                            dataClass:      #META},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspOrderConfirmationStatus'
define root view entity I_TranspOrdConfirmationStatus
  as select from dd07l
  composition [0..*] of I_TranspOrdConfirmationStsText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_confirm_status preserving type) as TransportationOrderConfSts,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_CONFIRM_STATUS'
  and as4local = 'A';
```
