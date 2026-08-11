---
name: C_CHMLCMPLNCPRIMMATLDEX
description: "This CDS view supports the extraction of chemical compliance information, including primary material information for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can material data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCPRIMMATLDEX')/$value
semantic_en: "This CDS view supports the extraction of chemical compliance information, including primary material information for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can material data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Chemical Compliance Primary Material Data Extraction — CDS view tiêu dùng dựa trên I_ChmlCmplncInfo."
keywords:
  - "chemical"
  - "compliance"
  - "primary"
  - "material"
  - "data"
  - "extraction"
  - "chml"
  - "cmplnc"
  - "info"
  - "prod"
  - "stewardship"
  - "resp"
  - "unit"
  - "dngrs"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-PC
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-PC
  - material
  - transaction
---
# C_CHMLCMPLNCPRIMMATLDEX

**This CDS view supports the extraction of chemical compliance information, including primary material information for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can material data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCPRIMMATLDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncInfoUUID` | ✓ | |  |  | `RAW(16)` | Chemical Compliance Information |
| `ProdStewardshipRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit |
| `DngrsGdsRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit for Dangerous Goods |
| `ChmlCmplncInfoType` |  | |  |  | `CHAR(2)` | CCI Type |
| `ChmlCmplncInternalName` |  | |  |  | `CHAR(132)` | Internal Name |
| `MaterialIsBaseProduct` |  | |  |  | `CHAR(1)` | Material is Base Product (obsolete) |
| `MaterialIsSold` |  | |  |  | `CHAR(1)` | Product is Sold |
| `MaterialIsTransported` |  | |  |  | `CHAR(1)` | Product is Transported |
| `MaterialIsSourced` |  | |  |  | `CHAR(1)` | Product is Sourced |
| `MaterialIsProduced` |  | |  |  | `CHAR(1)` | Product is Produced |
| `MaterialIsDisposed` |  | |  |  | `CHAR(1)` | Product is Disposed |
| `MaterialIsEmissionRelevant` |  | |  |  | `CHAR(1)` | Product is Emission Relevant |
| `Specification` |  | |  | `cast( ChmlCmplncInfo.Specification as ehfnd_internal_nr_nc preserving type )` | `CHAR(12)` | Internal Number |
| `SpecificationInternalID` |  | |  |  | `NUMC(20)` | Sequential Number of Data Record |
| `ChmlCmplncProdIsResearched` |  | |  |  | `CHAR(1)` | Research and Development Sample |
| `ChmlCmplncMatlAssgmtUUID` |  | |  |  | `RAW(16)` | Product Assignment |
| `Material` |  | |  |  | `CHAR(40)` | Product |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCPRIMMATLDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCPRIMMATLDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Chemical Compliance Primary Material Data Extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ChemicalComplianceInfo'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehfndd_cci',
        role: #MAIN,
        viewElement: ['ChmlCmplncInfoUUID'],
        tableElement: ['uuid']
      }, {
        table: 'ehfndd_cci_mat',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['ChmlCmplncMatlAssgmtUUID'],
        tableElement: ['uuid']
      }]
    }
  }
}
@Metadata.allowExtensions: true
define view entity C_ChmlCmplncPrimMatlDEX
  as select from           I_ChmlCmplncInfo       as ChmlCmplncInfo
    left outer to one join I_ChmlCmplncMatlAssgmt as ChmlCmplncMatlAssgmt on  ChmlCmplncInfo.ChmlCmplncInfoUUID        = ChmlCmplncMatlAssgmt.ChmlCmplncInfoUUID
                                                                          and ChmlCmplncMatlAssgmt.MatlAssgmtIsPrimary = 'X'
{
  key ChmlCmplncInfo.ChmlCmplncInfoUUID,
      ChmlCmplncInfo.ProdStewardshipRespUnit,
      ChmlCmplncInfo.DngrsGdsRespUnit,
      ChmlCmplncInfo.ChmlCmplncInfoType,
      ChmlCmplncInfo.ChmlCmplncInternalName,
      ChmlCmplncInfo.MaterialIsBaseProduct,
      ChmlCmplncInfo.MaterialIsSold,
      ChmlCmplncInfo.MaterialIsTransported,
      ChmlCmplncInfo.MaterialIsSourced,
      ChmlCmplncInfo.MaterialIsProduced,
      ChmlCmplncInfo.MaterialIsDisposed,
      ChmlCmplncInfo.MaterialIsEmissionRelevant,
      cast( ChmlCmplncInfo.Specification as ehfnd_internal_nr_nc preserving type ) as Specification,
      ChmlCmplncInfo.SpecificationInternalID,
      ChmlCmplncInfo.ChmlCmplncProdIsResearched,
      ChmlCmplncMatlAssgmt.ChmlCmplncMatlAssgmtUUID,
      ChmlCmplncMatlAssgmt.Material
}
```
