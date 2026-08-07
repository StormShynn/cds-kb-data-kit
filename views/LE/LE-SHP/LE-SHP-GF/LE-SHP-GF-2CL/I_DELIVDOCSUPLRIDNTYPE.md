---
name: I_DELIVDOCSUPLRIDNTYPE
description: Delivdocsuplridntype
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVDOCSUPLRIDNTYPE

**Delivdocsuplridntype**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExternalIdentificationType` | ✓ | |  | `cast (left(dd07l.domvalue_l, 1 ) as /spe/de_lifex_type preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: { viewEnhancementCategory: [#NONE] }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText.label: 'Deliv Doc Supplier Identification Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: { serviceQuality: #A,
               sizeCategory: #S,
               dataClass: #META },
  resultSet: { sizeCategory: #XS },
  representativeKey: 'ExternalIdentificationType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER ],
  sapObjectNodeType: { name: 'DelivDocSuplrIdnType' } }
@Search.searchable: true
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true,
              internalName: #LOCAL }
@Consumption.ranked: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_DelivDocSuplrIdnType
  as select from dd07l
  composition [0..*] of I_DelivDocSuplrIdnTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast (left(dd07l.domvalue_l, 1 ) as /spe/de_lifex_type  preserving type ) as ExternalIdentificationType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                          as DomainValue,

      _Text
}
where
      dd07l.domname  = '/SPE/DO_LIFEX_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
