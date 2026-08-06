---
name: I_PROFITCENTER
description: Profit Center
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - profit-center
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTER

**Profit Center**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `kokrs` |
| key `ProfitCenter` | `prctr` |
| key `ValidityEndDate` | `datbi` |
| `ProfitCtrResponsiblePersonName` | `verak` |
| `CompanyCode` | `bukrs` |
| `ProfitCtrResponsibleUser` | `verak_user` |
| `ValidityStartDate` | `datab` |
| `Department` | `abtei` |
| `ProfitCenterStandardHierarchy` | `khinr` |
| `Segment` | `segment` |
| `ProfitCenterIsBlocked` | `lock_ind` |
| `FormulaPlanningTemplate` | `pca_template` |
| `FormOfAddress` | `anred` |
| `AddressName` | `name1` |
| `AdditionalName` | `name2` |
| `ProfitCenterAddrName3` | `name3` |
| `ProfitCenterAddrName4` | `name4` |
| `StreetAddressName` | `stras` |
| `POBox` | `pfach` |
| `CityName` | `ort01` |
| `PostalCode` | `pstlz` |
| `POBoxPostalCode` | `pstl2` |
| `District` | `ort02` |
| `Country` | `land1` |
| `Region` | `regio` |
| `TaxJurisdiction` | `txjcd` |
| `Language` | `spras` |
| `PhoneNumber1` | `telf1` |
| `PhoneNumber2` | `telf2` |
| `TeleboxNumber` | `telbx` |
| `TelexNumber` | `telx1` |
| `FaxNumber` | `telfx` |
| `TeletexNumber` | `teltx` |
| `DataCommunicationPhoneNumber` | `datlt` |
| `ProfitCenterPrinterName` | `drnam` |
| `ProfitCenterCreatedByUser` | `usnam` |
| `ProfitCenterCreationDate` | `ersda` |
| `LogicalSystem` | `logsystem` |
| `_ControllingAreaText` | *Association* |
| `_SegmentText` | *Association* |
| `_ControllingArea` | *Association* |
| `_Text` | *Association* |
| `_ProfitCenterHierarchyNode` | *Association* |
| `_Country` | *Association* |
| `_Company` | *Association* |
| `_Segment` | *Association* |
| `_Region` | *Association* |
| `_PrftCtrCompanyCodeAssignment` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [1..1] |
| `_SegmentText` | `I_SegmentText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_Text` | `I_ProfitCenterText` | [0..*] |
| `_ProfitCenterHierarchyNode` | `I_ProfitCenterHierarchyNode` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_PrftCtrCompanyCodeAssignment` | `I_PrftCtrCompanyCodeAssignment` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_Extension` | `E_ProfitCenter` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Profit Center'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPROFITCENTER'
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:  [ '_ProfitCenterHierarchyNode'
//--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
,'_ControllingAreaText','_SegmentText'
// ]--GENERATED
]
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ProfitCenter'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}

@ObjectModel.sapObjectNodeType.name: 'ProfitCenter'

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@Search.searchable: true
@Consumption.filter.businessDate.at: true
define view I_ProfitCenter
  as select from cepc


  //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
  association [1..1] to I_ControllingArea              as _ControllingAreaText          on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_SegmentText                  as _SegmentText                  on  $projection.Segment = _SegmentText.Segment
  // ]--GENERATED
  association [1..1] to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_ProfitCenterText             as _Text                         on  $projection.ControllingArea = _Text.ControllingArea
                                                                                        and $projection.ProfitCenter    = _Text.ProfitCenter
                                                                                        and $projection.ValidityEndDate = _Text.ValidityEndDate
  association [0..*] to I_ProfitCenterHierarchyNode    as _ProfitCenterHierarchyNode    on  $projection.ControllingArea = _ProfitCenterHierarchyNode.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenterHierarchyNode.ProfitCenter
  association [0..1] to I_Country                      as _Country                      on  $projection.Country = _Country.Country
  association [0..1] to I_CompanyCode                  as _Company                      on  $projection.CompanyCode = _Company.CompanyCode
  association [0..1] to I_Segment                      as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..1] to I_Region                       as _Region                       on  $projection.Country = _Region.Country
                                                                                        and $projection.Region  = _Region.Region

  association [0..*] to I_PrftCtrCompanyCodeAssignment as _PrftCtrCompanyCodeAssignment on  $projection.ControllingArea = _PrftCtrCompanyCodeAssignment.ControllingArea
                                                                                        and $projection.ProfitCenter    = _PrftCtrCompanyCodeAssignment.ProfitCenter

  //association[0..*] to I_TaxJurisdiction           as _TaxJurisdiction           on $projection.TaxJurisdiction   = _TaxJurisdiction.TaxJurisdiction
  association [0..1] to I_Language                     as _Language                     on  $projection.Language = _Language.Language
  association [1..1] to E_ProfitCenter                 as _Extension                    on  $projection.ControllingArea = _Extension.ControllingArea
                                                                                        and $projection.ProfitCenter    = _Extension.ProfitCenter
                                                                                        and $projection.ValidityEndDate = _Extension.ValidityEndDate

{
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key kokrs        as ControllingArea,
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_ProfitCenterHierarchyNode'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key prctr        as ProfitCenter,

      @Semantics.businessDate.to: true
  key datbi        as ValidityEndDate,
      verak        as ProfitCtrResponsiblePersonName,
      
///////////////////////////////////////////////////////////////////////////
// Attention
//           Please do NOT use this field CompanyCode from this view
//                (it is empty and will not be used/filled)
//
//  The assignment CompanyCode - Profitcenter is built in another way
// We cannot delete the wrong field here because of DDL guidelines
///////////////////////////////////////////////////////////////////////      
      bukrs        as CompanyCode,
      
      verak_user   as ProfitCtrResponsibleUser,
      @Semantics.businessDate.from: true
      datab        as ValidityStartDate,
      abtei        as Department,
      khinr        as ProfitCenterStandardHierarchy,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.text.association: '_SegmentText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Segment' //Inserted by VDM CDS Suite Plugin
      segment      as Segment,
      lock_ind     as ProfitCenterIsBlocked,
      pca_template as FormulaPlanningTemplate,
      anred        as FormOfAddress,
      name1        as AddressName,
      name2        as AdditionalName,
      name3        as ProfitCenterAddrName3,
      name4        as ProfitCenterAddrName4,
      stras        as StreetAddressName,
      pfach        as POBox,
      ort01        as CityName,
      pstlz        as PostalCode,
      pstl2        as POBoxPostalCode,
      ort02        as District,
      @ObjectModel.foreignKey.association: '_Country' //Inserted by VDM CDS Suite Plugin
      land1        as Country,
      @ObjectModel.foreignKey.association: '_Region'
      regio        as Region,
      txjcd        as TaxJurisdiction,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
      spras        as Language,
      telf1        as PhoneNumber1,
      telf2        as PhoneNumber2,
      telbx        as TeleboxNumber,
      telx1        as TelexNumber,
      telfx        as FaxNumber,
      teltx        as TeletexNumber,
      datlt        as DataCommunicationPhoneNumber,
      drnam        as ProfitCenterPrinterName,
      usnam        as ProfitCenterCreatedByUser,
      @Semantics.systemDate.createdAt: true
      ersda        as ProfitCenterCreationDate,
      logsystem    as LogicalSystem,

      _Text,
      _Country,
      _ControllingArea,
      _ProfitCenterHierarchyNode,
      _Language,
      _Company,
      _Segment,
      _Region,
      _PrftCtrCompanyCodeAssignment,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.hidden: true
      _ControllingAreaText,
      @Consumption.hidden: true
      _SegmentText
      // ]--GENERATED

      //_TaxJurisdiction
}
```
