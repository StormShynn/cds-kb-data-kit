---
name: I_TRANSPAGREEMENTTYPE
description: "Transpagreementtype"
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
# I_TRANSPAGREEMENTTYPE

**Transpagreementtype**

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
| `TransportationAgreementType` | ✓ | |  | `cast( fagtypeid103 as /scmtms/vdm_fag_type_code preserving type )` |  |  |
| `_TranspAgreementTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspAgreementTypeText` | `I_TranspAgreementTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics:     {dataCategory:             #DIMENSION,
                 internalName:             #LOCAL }
@Analytics.technicalName: 'ITFAGTYP'
@EndUserText.label: 'Transportation Agreement Type'
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}
@ObjectModel:   {sapObjectNodeType.name: 'TransportationAgreementType',
                 representativeKey:     'TransportationAgreementType',
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspAgreementType
  as select from /scmtms/c_fatype
  association [0..*] to I_TranspAgreementTypeText as _TranspAgreementTypeText on $projection.TransportationAgreementType = _TranspAgreementTypeText.TransportationAgreementType
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_TranspAgreementTypeText'
  key cast( fagtypeid103 as /scmtms/vdm_fag_type_code preserving type ) as TransportationAgreementType,

      /* Associations */
      _TranspAgreementTypeText
}
```
