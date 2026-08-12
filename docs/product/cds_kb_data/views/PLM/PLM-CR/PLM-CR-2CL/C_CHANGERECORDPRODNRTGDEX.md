---
name: C_CHANGERECORDPRODNRTGDEX
description: "Change Record Prodn Routing Extraction"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPRODNRTGDEX')/$value
semantic_en: "Change Record Prodn Routing Extraction"
semantic_vi: "Change Record Prodn Routing Extraction — CDS view tiêu dùng dựa trên I_ChangeRecordItem."
keywords:
  - "change"
  - "record"
  - "prodn"
  - "routing"
  - "extraction"
  - "reference"
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
---
# C_CHANGERECORDPRODNRTGDEX

**Change Record Prodn Routing Extraction**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPRODNRTGDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` | ✓ | |  |  | `RAW(16)` | DB Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPRODNRTGDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPRODNRTGDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Prodn Routing Extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordRefProdnRouting'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGREC_PRG', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordProdnRtgDEX  as select from I_ChangeRecordItem
//  as select from I_ChgRecdProdnRoutingDetail
{
  key ChangeRecordReferenceUUID
//      ChangeRecordUUID,
//      Material,
//      Plant,
//      BillOfOperationsType,
//      BillOfOperationsGroup,
//      BillOfOperationsVariant
}
```
