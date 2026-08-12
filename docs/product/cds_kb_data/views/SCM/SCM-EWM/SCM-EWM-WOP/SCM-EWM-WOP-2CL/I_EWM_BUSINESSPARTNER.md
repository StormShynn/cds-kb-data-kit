---
name: I_EWM_BUSINESSPARTNER
description: "This CDS view provides information about business partners in your warehouse."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSPARTNER')/$value
semantic_en: "This CDS view provides information about business partners in your warehouse."
semantic_vi: "EWM Business Partner — CDS view giao diện dựa trên I_BusinessPartner."
keywords:
  - "ewm"
  - "business"
  - "partner"
  - "name"
  - "authorization"
  - "group"
  - "purpose"
  - "completed"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_BUSINESSPARTNER

**This CDS view provides information about business partners in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerName` |  | |  | `OrganizationBPName1` | `CHAR(40)` | Name 1 of organization |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSPARTNER')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'EWM Business Partner'

@Metadata.ignorePropagatedAnnotations:true

@VDM.viewType: #COMPOSITE
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'BusinessPartner'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMBP'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #MASTER,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                         

@VDM.lifecycle.status: #DEPRECATED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_EWM_BusinessPartner
  as select from I_BusinessPartner 
{
//  @ObjectModel.text.element:['BusinessPartnerName']
  key BusinessPartner,
      BusinessPartnerUUID,
      @Semantics.text: true  
      OrganizationBPName1 as BusinessPartnerName,
      AuthorizationGroup,
      IsBusinessPurposeCompleted,
      
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController1,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController2,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController3,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController4,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController6,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController7,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController8,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController9,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      DataController10     
}
```
