---
name: I_TRANSPDIMNWGTPROFILETEXT
description: "Transp Dimensional Weight Profile - Text"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWGTPROFILETEXT')/$value
semantic_en: "Transp Dimensional Weight Profile - Text"
semantic_vi: "Transp Dimensional Weight Profile - Text — CDS view cơ bản dựa trên Transp Dimensional Weight Profile - Text."
keywords:
  - "transp"
  - "dimensional"
  - "weight"
  - "profile"
  - "text"
  - "dimn"
  - "language"
  - "prof"
  - "desc"
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - interface-view
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
---
# I_TRANSPDIMNWGTPROFILETEXT

**Transp Dimensional Weight Profile - Text**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWGTPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspDimnWeightProfile` | ✓ | |  | `id` | `CHAR(10)` | Dimensional Weight Profile |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `TranspDimnWeightProfDesc` |  | |  | `description` | `CHAR(80)` | Dimensional Weight Profile Description |
| `_TranspDimnWeightProfile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspDimnWeightProfile` | `I_TranspDimnWeightProfile` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWGTPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWGTPROFILETEXT')/$value)*

```abap
@EndUserText.label: 'Transp Dimensional Weight Profile - Text'
@ClientHandling.algorithm:           #SESSION_VARIABLE
@AbapCatalog:   {sqlViewName:        'ITDIMWGTPROFLTXT',
                 compiler:           {compareFilter: true},
                 buffering:          {status: #ACTIVE,
                                      type:   #SINGLE}}
@ObjectModel:   {representativeKey:  'TranspDimnWeightProfile',
                 dataCategory: #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,                                      
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC }
//                 lifecycle.contract.type: #NONE}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:       {ignorePropagatedAnnotations: true}

define view I_TranspDimnWgtProfileText
  as select from /scmtms/c_dimwpt
  association [1..1] to I_TranspDimnWeightProfile as _TranspDimnWeightProfile on $projection.TranspDimnWeightProfile = _TranspDimnWeightProfile.TranspDimnWeightProfile
  association [1..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspDimnWeightProfile'
  key id               as TranspDimnWeightProfile,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language         as Language,
      @Semantics.text: true
      description      as TranspDimnWeightProfDesc,    

      /*Associations*/
      _TranspDimnWeightProfile,
      _Language
}
```
