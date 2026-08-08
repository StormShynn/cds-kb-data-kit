---
name: I_TRANSPORDCONFIRMATIONSTSTEXT
description: "Transpordconfirmationststext"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDCONFIRMATIONSTSTEXT

**Transpordconfirmationststext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TransportationOrderConfStsDesc` |  | |  | `cast(ddtext as /scmtms/vdm_confirm_sts_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdConfirmationStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:                    'Confirmation Status - Text'}
@Analytics:     {internalName:             #LOCAL}
@ObjectModel:   {representativeKey:        'TransportationOrderConfSts',
                 dataCategory:             #TEXT,
                 usageType:                {serviceQuality: #A,
                                            sizeCategory:   #S,
                                            dataClass:      #META},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ITORCONFSTATUST'
@VDM:           {viewType:                 #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdConfirmationStsText
  as select from dd07t
  association        to parent I_TranspOrdConfirmationStatus as _TranspOrdConfirmationStatus on $projection.TransportationOrderConfSts = _TranspOrdConfirmationStatus.TransportationOrderConfSts
  association [0..1] to I_Language                           as _Language                    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdConfirmationStatus'
      @ObjectModel.text.element: ['TransportationOrderConfStsDesc']
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_confirm_status preserving type) as TransportationOrderConfSts,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                      as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_confirm_sts_desc preserving type )                   as TransportationOrderConfStsDesc,

      /* Associations */
      _TranspOrdConfirmationStatus,
      _Language
}
where
      domname  = '/SCMTMS/TOR_CONFIRM_STATUS'
  and as4local = 'A';
```
