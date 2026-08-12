---
name: I_EWM_PLANGIOFFSETDATE
description: "This CDS view provides information about the start date and end date of planned goods issue for outbound delivery orders based on the specified offset days in your warehouse. This CDS view provides the data to answer the following business questions: What is the start date of planned goods issue for outbound delivery order 123? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PLANGIOFFSETDATE')/$value
semantic_en: "This CDS view provides information about the start date and end date of planned goods issue for outbound delivery orders based on the specified offset days in your warehouse. This CDS view provides the data to answer the following business questions: What is the start date of planned goods issue for outbound delivery order 123? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Plnd Offset Date for Goods Issue - Cube — CDS view giao diện dựa trên I_EWM_WrhsTmznDate."
keywords:
  - "plnd"
  - "offset"
  - "date"
  - "for"
  - "goods"
  - "issue"
  - "cube"
  - "planned"
  - "start"
  - "delivery"
  - "type"
  - "document"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - delivery
  - goods-issue
  - interface-view
  - order
  - plan
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_PLANGIOFFSETDATE

**This CDS view provides information about the start date and end date of planned goods issue for outbound delivery orders based on the specified offset days in your warehouse. This CDS view provides the data to answer the following business questions: What is the start date of planned goods issue for outbound delivery order 123? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PLANGIOFFSETDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedGIStartDate` | ✓ | |  | `case when PlannedGIStartTime <= PlannedGIEndTime then case when WrhsTmznCurrentTime < PlannedGIEndTime then dats_add_days(WrhsTmznCurrentDate,$parameters.P_StartOffsetDay , 'INITIAL') else dats_add_days(WrhsTmznCurrentDate,1 + $parameters.P_StartOffsetDay,'INITIAL') end else case when WrhsTmznCurrentTime > PlannedGIEndTime then dats_add_days(WrhsTmznCurrentDate,$parameters.P_StartOffsetDay , 'INITIAL') else dats_add_days(WrhsTmznCurrentDate,-1 + $parameters.P_StartOffsetDay,'INITIAL') end end` | `DATS(8)` |  |
| `PlannedGIEndDate` |  | |  | `case when PlannedGIStartTime <= PlannedGIEndTime then case when WrhsTmznCurrentTime < PlannedGIEndTime then dats_add_days(WrhsTmznCurrentDate,$parameters.P_EndOffsetDay, 'INITIAL') else dats_add_days(WrhsTmznCurrentDate,1 + $parameters.P_EndOffsetDay, 'INITIAL') end else case when WrhsTmznCurrentTime > PlannedGIEndTime then dats_add_days(WrhsTmznCurrentDate,1 + $parameters.P_EndOffsetDay, 'INITIAL') else dats_add_days(WrhsTmznCurrentDate,$parameters.P_EndOffsetDay, 'INITIAL') end end` | `DATS(8)` |  |
| `DeliveryType` |  | |  |  | `CHAR(4)` | Document Type |
| `EWMDeliveryDocumentType` |  | |  |  | `CHAR(4)` | Document Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PLANGIOFFSETDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PLANGIOFFSETDATE')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.representativeKey: 'PlannedGIStartDate'
@Analytics.technicalName: 'IEWMGIOSD'
@VDM.viewType:#COMPOSITE
@Analytics:{ dataCategory: #CUBE }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType: {serviceQuality: #D,
                         dataClass: #MIXED,
                         sizeCategory: #S}

@ObjectModel.modelingPattern:           #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_PROVIDER,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]

@EndUserText.label: 'Plnd Offset Date for Goods Issue - Cube'
define view entity I_EWM_PlanGIOffsetDate
  with parameters
    @EndUserText.label: 'Offset Day for Start Date'
    @Consumption.defaultValue: '1'
    P_StartOffsetDay     : int4,
    @EndUserText.label: 'Start Time'
    @Consumption.defaultValue: '080000'
    P_PlannedGIStartTime : /scdl/de_plantime,
    @EndUserText.label: 'Offset Day for End Date'
    @Consumption.defaultValue: '1'
    P_EndOffsetDay       : int4,
    @EndUserText.label: 'End Time'
    @Consumption.defaultValue: '140000'
    P_PlannedGIEndTime   : /scdl/de_plantime,
    @EndUserText.label: 'Warehouse Number'
    @Consumption.defaultValue: 'EW01'
    P_WarehouseNumber    : /scwm/lgnum
  as select from I_EWM_WrhsTmznDate  (
                 P_PlannedGIStartTime:$parameters.P_PlannedGIStartTime,
                 P_PlannedGIEndTime:$parameters.P_PlannedGIEndTime,
                 P_WarehouseNumber:$parameters.P_WarehouseNumber
                 )
{

  key case
      when PlannedGIStartTime <= PlannedGIEndTime
      then
           case
              when WrhsTmznCurrentTime < PlannedGIEndTime then
                  dats_add_days(WrhsTmznCurrentDate,$parameters.P_StartOffsetDay , 'INITIAL')
              else
                  dats_add_days(WrhsTmznCurrentDate,1 + $parameters.P_StartOffsetDay,'INITIAL')
           end
      else
          case
              when WrhsTmznCurrentTime > PlannedGIEndTime then
                  dats_add_days(WrhsTmznCurrentDate,$parameters.P_StartOffsetDay , 'INITIAL')
              else
                  dats_add_days(WrhsTmznCurrentDate,-1 + $parameters.P_StartOffsetDay,'INITIAL')
          end

      end    as PlannedGIStartDate,

      case
         when PlannedGIStartTime <= PlannedGIEndTime
         then
              case
                 when WrhsTmznCurrentTime < PlannedGIEndTime then
                     dats_add_days(WrhsTmznCurrentDate,$parameters.P_EndOffsetDay, 'INITIAL')
                 else
                     dats_add_days(WrhsTmznCurrentDate,1 + $parameters.P_EndOffsetDay, 'INITIAL')
              end
         else
             case
                 when WrhsTmznCurrentTime > PlannedGIEndTime then
                     dats_add_days(WrhsTmznCurrentDate,1 + $parameters.P_EndOffsetDay, 'INITIAL')
                 else
                     dats_add_days(WrhsTmznCurrentDate,$parameters.P_EndOffsetDay, 'INITIAL')
             end
         end as PlannedGIEndDate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMDeliveryDocumentType'
      DeliveryType,
      EWMDeliveryDocumentType
}
```
