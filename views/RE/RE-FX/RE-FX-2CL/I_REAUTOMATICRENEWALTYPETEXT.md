---
name: I_REAUTOMATICRENEWALTYPETEXT
description: Reautomaticrenewaltypetext
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_REAUTOMATICRENEWALTYPETEXT

**Reautomaticrenewaltypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `REAutomaticRenewalType` | ✓ | |  | `cast( dd07t.domvalue_l as retmrnauttype )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `REAutomaticRenewalTypeName` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | | ✓ | | |
| `_REAutomaticRenewalType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREAUTRNWLTT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Automatic Renewal Type - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REAutomaticRenewalType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@VDM.viewType: #BASIC
define view I_REAutomaticRenewalTypeText
  as select from dd07t
  association        to parent I_REAutomaticRenewalType as _REAutomaticRenewalType on $projection.REAutomaticRenewalType = _REAutomaticRenewalType.REAutomaticRenewalType
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REAutomaticRenewalType'
      @ObjectModel.text.element: ['REAutomaticRenewalTypeName']
  key cast( dd07t.domvalue_l as retmrnauttype )         as REAutomaticRenewalType,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REAutomaticRenewalTypeName,
      _REAutomaticRenewalType,
      _Language
}
where
      dd07t.domname  = 'RETMRNAUTTYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
