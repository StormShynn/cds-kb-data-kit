---
name: I_REGNRCRENTALOBJPORTFOLIO
description: Regnrcrentalobjportfolio
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REGNRCRENTALOBJPORTFOLIO

**Regnrcrentalobjportfolio**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REGnrcRentalObjPortfolioID` | ✓ | |  | `portfolioid` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REGnrcRentalObjPortfolioText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREGOPORTFOLIO'
 }


@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'REGnrcrentalObjPortfolioid',
            sapObjectNodeType.name: 'RERentalObjectPortfolio',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}                               

                           
@Metadata.ignorePropagatedAnnotations: true                              
@VDM.viewType: #BASIC                                        
@ObjectModel.compositionRoot: true 
@EndUserText.label: 'Real Estate Rental Object Portfolio'
define view entity I_REGnrcRentalObjPortfolio
  as select from tivgoportfolio
  association [0..*] to I_REGnrcRentalObjPortfolioText as _Text on $projection.REGnrcRentalObjPortfolioID = _Text.REGnrcRentalObjPortfolioID
{
      @ObjectModel.text.association: '_Text'
  key portfolioid as REGnrcRentalObjPortfolioID,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
