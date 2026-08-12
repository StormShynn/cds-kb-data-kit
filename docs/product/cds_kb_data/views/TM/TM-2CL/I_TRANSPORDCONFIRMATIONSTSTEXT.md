---
name: I_TRANSPORDCONFIRMATIONSTSTEXT
description: "Transpordconfirmationststext"
app_component: TM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
