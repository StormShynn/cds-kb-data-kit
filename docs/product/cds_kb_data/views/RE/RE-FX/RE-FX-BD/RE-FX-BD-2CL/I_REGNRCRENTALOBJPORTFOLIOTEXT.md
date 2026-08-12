---
name: I_REGNRCRENTALOBJPORTFOLIOTEXT
description: "Regnrcrentalobjportfoliotext"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REGNRCRENTALOBJPORTFOLIOTEXT

**Regnrcrentalobjportfoliotext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REGnrcRentalObjPortfolioID` | ✓ | |  | `portfolioid` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REGnrcRentalObjPortfolioIDText` |  | |  | `description` |  |  |
| `_REGnrcRentalObjPortfolio` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REGnrcRentalObjPortfolio` | `I_REGnrcRentalObjPortfolio` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREGOPORTFOLIOT'
 }

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                            },
                dataCategory: #TEXT,
                representativeKey: 'REGnrcRentalObjPortfolioID',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
               sapObjectNodeType.name: 'RERentalObjectPortfolioText'
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Real Estate Rental Obj Portfolio - Text'
define view entity I_REGnrcRentalObjPortfolioText
  as select from tivgoportfoliot
  association [1..1] to I_REGnrcRentalObjPortfolio as _REGnrcRentalObjPortfolio on $projection.REGnrcRentalObjPortfolioID = _REGnrcRentalObjPortfolio.REGnrcRentalObjPortfolioID
  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjPortfolio'
    @ObjectModel.text.element:['REGnrcRentalObjPortfolioIDText']
  key portfolioid as REGnrcRentalObjPortfolioID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
  key spras       as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW  
      @Semantics.text:true
      description as REGnrcRentalObjPortfolioIDText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _REGnrcRentalObjPortfolio,
      _Language
}
```
