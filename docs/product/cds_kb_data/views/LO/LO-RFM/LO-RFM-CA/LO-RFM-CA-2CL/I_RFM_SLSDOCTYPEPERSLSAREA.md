---
name: I_RFM_SLSDOCTYPEPERSLSAREA
description: "Retail Fashion Management Sales Document Type per Sales Area"
app_component: LO-RFM-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RFM_SLSDOCTYPEPERSLSAREA')/$value
semantic_en: "Retail Fashion Management Sales Document Type per Sales Area"
semantic_vi: "RFM Sales Doc Type per Sales Area — CDS view giao diện dựa trên fsh_os_sd."
keywords:
  - "rfm"
  - "sales"
  - "doc"
  - "type"
  - "per"
  - "area"
  - "document"
  - "organization"
  - "distribution"
  - "channel"
  - "division"
  - "season"
  - "detn"
  - "control"
tags:
  - LO
  - bo:salesorganization
  - component:LO-RFM-CA-2CL
  - document
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-2CL
  - lob:cross_application components
  - lob:logistics general
---
# I_RFM_SLSDOCTYPEPERSLSAREA

**Retail Fashion Management Sales Document Type per Sales Area**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RFM_SLSDOCTYPEPERSLSAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` | ✓ | |  | `auart` | `CHAR(4)` | Sales Document Type |
| `SalesOrganization` | ✓ | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | ✓ | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Division` | ✓ | |  | `spart` | `CHAR(2)` | Division |
| `SeasonDetnControl` |  | |  | `seap_flg` | `CHAR(1)` | Season Processing |
| `SeasonDeterminationMessageType` |  | |  | `seam_flg` | `CHAR(1)` | Season Processing Message Type |
| `DelivDteFrmSeasnMstrIsPrpsd` |  | |  | `ddate_flag` | `CHAR(1)` | Delivery Date Proposal Flag |
| `_SalesDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SeasnDetnMsgType` | | ✓ | | | | |
| `_SeasonDetnControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentType` | `I_SalesDocumentType` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [1..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [1..1] |
| `_Division` | `I_Division` | [1..1] |
| `_SeasnDetnMsgType` | `I_SeasnDetnMsgType` | [0..1] |
| `_SeasonDetnControl` | `I_SeasonDetnControl` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RFM_SLSDOCTYPEPERSLSAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RFM_SLSDOCTYPEPERSLSAREA')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey:'SalesDocumentType'
@ObjectModel.sapObjectNodeType.name: 'RFMSlsDocTypePerSlsArea'
@ObjectModel:{
modelingPattern: #ANALYTICAL_DIMENSION,
supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION  ],
                            
 usageType.dataClass : #CUSTOMIZING,
 usageType.serviceQuality: #A,
 usageType.sizeCategory: #S
 }
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'RFM Sales Doc Type per Sales Area'

// For Data Extraction
@Analytics: {
internalName:#LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
   }
  }

//View Entity Creation
define view entity I_RFM_SlsDocTypePerSlsArea
  as select from fsh_os_sd
  association [1..1] to I_SalesDocumentType    as _SalesDocumentType   on  $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [1..1] to I_SalesOrganization    as _SalesOrganization   on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [1..1] to I_DistributionChannel  as _DistributionChannel on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [1..1] to I_Division             as _Division            on  $projection.Division = _Division.Division

  association [0..1] to  I_SeasnDetnMsgType  as _SeasnDetnMsgType  on  $projection.SeasonDeterminationMessageType = _SeasnDetnMsgType.SeasonDeterminationMessageType
  association [0..1] to I_SeasonDetnControl as _SeasonDetnControl  on  $projection.SeasonDetnControl = _SeasonDetnControl.SeasonDetnControl
 

{
  key auart           as SalesDocumentType,
      @ObjectModel.foreignKey.association:'_SalesOrganization'
  key vkorg           as SalesOrganization,
      @ObjectModel.foreignKey.association:'_DistributionChannel'
  key vtweg           as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
  key spart           as Division,
      @ObjectModel.foreignKey.association: '_SeasonDetnControl'
      seap_flg        as SeasonDetnControl,
      @ObjectModel.foreignKey.association: '_SeasnDetnMsgType'
     seam_flg        as SeasonDeterminationMessageType, 
      ddate_flag      as DelivDteFrmSeasnMstrIsPrpsd,      


      //Expose Association
      _SalesDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SeasnDetnMsgType,
      _SeasonDetnControl    

}
```
