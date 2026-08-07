---
name: I_COSTCENTERACTIVITYTYPETEXT
description: Cost CenterACTIVITYTYPETEXT
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - text-view
  - cost-center
  - text
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERACTIVITYTYPETEXT

**Cost CenterACTIVITYTYPETEXT**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ValidityEndDate` | ✓ | |  | `datbi` |
| `ControllingArea` | ✓ | |  | `cast( cslt.kokrs as fis_kokrs preserving type )` |
| `CostCtrActivityType` | ✓ | |  | `lstar` |
| `Language` | ✓ | |  | `spras` |
| `CostCtrActivityTypeName` |  | |  | `cast( ktext as fis_costctractivitytypename preserving type )` |
| `CostCtrActivityTypeDesc` |  | |  | `cast( ltext as fis_costctractivitytypedesc preserving type )` |
| `ValidityStartDate` |  | |  | `datab` |
| `CostCtrActyTypeTxtSearchTerm` |  | |  | `mctxt` |
| `_ControllingAreaText` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CostCtrActivityType'

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}
@EndUserText.label: 'Cost Center Activity Type - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    } }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICCACTTYPT'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@Consumption.filter.businessDate.at: true

define view I_CostCenterActivityTypeText as select from cslt 
  left outer to one join csla as _md on cslt.lstar = _md.lstar and
                                        cslt.kokrs = _md.kokrs and
                                        cslt.datbi = _md.datbi
  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association[1]      to I_ControllingArea    as _ControllingArea on  $projection.ControllingArea     = _ControllingArea.ControllingArea
{
  @Semantics.businessDate.to: true
  key cslt.datbi as ValidityEndDate,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
  @ObjectModel.foreignKey.association: '_ControllingArea' 
  key cast( cslt.kokrs as fis_kokrs preserving type ) as ControllingArea,
  key cslt.lstar as CostCtrActivityType,
  @Semantics.language
  @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key spras as Language,
  @Semantics.text:true 
  cast( ktext as fis_costctractivitytypename preserving type ) as CostCtrActivityTypeName,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  cast( ltext as fis_costctractivitytypedesc preserving type ) as CostCtrActivityTypeDesc,
 
  @Semantics.businessDate.from: true
  datab as ValidityStartDate,

  mctxt as CostCtrActyTypeTxtSearchTerm,
  
  _Language,
  _ControllingArea,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


};
```
